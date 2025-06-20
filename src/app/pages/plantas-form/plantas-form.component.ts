import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { PlantasService } from '../../services/plantas.service';
import { PlantaMedicinal } from '../../models/planta.model';



@Component({
  selector: 'app-plantas-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './plantas-form.component.html',
  styleUrls: ['./plantas-form.component.css']
})
export class PlantasFormComponent implements OnInit {
  plantaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private plantasService: PlantasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.plantaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      usos: ['', Validators.required],
      region: ['', Validators.required],
      imagenUrl: ['']
    });
  }

  guardar() {
    if (this.plantaForm.valid) {
      const nuevaPlanta = this.plantaForm.value;
      console.log('Intentando guardar:', nuevaPlanta);
  
      this.plantasService.addPlanta(nuevaPlanta)
        .then(() => {
          alert('✅ Planta registrada');
          this.router.navigate(['/plantas']);
        })
        .catch(error => {
          console.error('❌ Error al registrar en Firebase:', error); // 👈 mensaje detallado
          alert('Error al registrar la planta.');
        });
    } else {
      alert('❌ El formulario no es válido');
    }
  }
  
  
  eliminarPlanta(id: string) {
    const confirmar = confirm('¿Estás seguro de eliminar esta planta?');
    if (confirmar) {
      this.plantasService.deletePlanta(id)
        .then(() => alert('Planta eliminada ✅'))
        .catch(err => console.error('Error al eliminar:', err));
    }
  }
  
}
