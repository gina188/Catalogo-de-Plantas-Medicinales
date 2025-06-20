import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasService } from '../../services/plantas.service';
import { PlantaMedicinal } from '../../models/planta.model';
import { RouterModule } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';



@Component({
  selector: 'app-plantas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']

})
export class PlantasComponent implements OnInit {
  plantas: PlantaMedicinal[] = [];

  constructor(private plantasService: PlantasService) {}

  ngOnInit(): void {
    this.plantasService.getPlantas().subscribe(data => {
      this.plantas = data;
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
 
  
  
}
