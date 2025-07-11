import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasService } from '../../services/plantas.service';
import { PlantaMedicinal } from '../../models/planta.model';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-plantas',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {
  plantas: PlantaMedicinal[] = [];
  terminoBusqueda: string = '';
  filtroRegion: string = '';
  ordenAlfabetico: string = ''; // ✅ NUEVA PROPIEDAD
  rol$!: Observable<string>;

  constructor(
    private plantasService: PlantasService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.rol$ = this.auth.user$.pipe(
      map((user: any) => user?.rol || 'visitante')
    );

    this.plantasService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
    });
  }

  eliminarPlanta(id: string | undefined) {
    if (!id) {
      alert('❌ ID de la planta no válido');
      return;
    }

    const confirmar = confirm('¿Estás seguro de eliminar esta planta?');
    if (confirmar) {
      this.plantasService.deletePlanta(id)
        .then(() => alert('✅ Planta eliminada'))
        .catch(err => console.error('Error al eliminar:', err));
    }
  }

  get regionesUnicas(): string[] {
    const regiones = this.plantas.map(p => p.region);
    return Array.from(new Set(regiones));
  }

  get plantasFiltradas() {
    let filtradas = this.plantas.filter(p => {
      const coincideBusqueda =
        p.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
        p.usos.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
        p.region.toLowerCase().includes(this.terminoBusqueda.toLowerCase());

      const coincideRegion =
        this.filtroRegion === '' || p.region === this.filtroRegion;

      return coincideBusqueda && coincideRegion;
    });

    // ✅ Orden alfabético
    if (this.ordenAlfabetico === 'asc') {
      filtradas = filtradas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (this.ordenAlfabetico === 'desc') {
      filtradas = filtradas.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    return filtradas;
  }
}
