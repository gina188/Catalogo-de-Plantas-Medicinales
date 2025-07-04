import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlantasService } from '../../services/plantas.service';
import { PlantaMedicinal } from '../../models/planta.model';

@Component({
  selector: 'app-plantas-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plantas-detalle.component.html',
  styleUrls: ['./plantas-detalle.component.css']
})
export class PlantasDetalleComponent implements OnInit {
  planta?: PlantaMedicinal;
  cargando = true;

  constructor(
    private route: ActivatedRoute,
    private plantasService: PlantasService
  ) {}

ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.plantasService.getPlantaById(id).subscribe((data: PlantaMedicinal | undefined) => {
        if (data) {
          this.planta = data;
        } else {
          alert('Planta no encontrada');
        }
      });
    }
  }
}
