import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PlantasService } from '../../services/plantas.service';
import { PlantaMedicinal } from '../../models/planta.model';
import { CloudinaryService } from '../../services/cloudinary.service';

@Component({
  selector: 'app-plantas-editar',
  standalone: true,
  templateUrl: './plantas-editar.component.html',
  styleUrls: ['./plantas-editar.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class PlantasEditarComponent implements OnInit {
  plantaForm!: FormGroup;
  plantaId!: string;
  imagenPreview: string | null = null;
  imagenCargando = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private plantasService: PlantasService,
    private cloudinaryService: CloudinaryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.plantaId = this.route.snapshot.params['id'];

    this.plantaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      usos: ['', Validators.required],
      region: ['', Validators.required],
      imagenUrl: ['']
    });

    this.plantasService.getPlantaById(this.plantaId).subscribe((data) => {
      if (data) {
        this.plantaForm.patchValue(data);
        this.imagenPreview = data.imagenUrl ?? null;
      }
    });
  }

  subirImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagenCargando = true;
      this.cloudinaryService.uploadImage(file).subscribe({
        next: (res: any) => {
          this.plantaForm.patchValue({ imagenUrl: res.secure_url });
          this.imagenPreview = res.secure_url;
          this.imagenCargando = false;
        },
        error: (err) => {
          console.error('Error al subir imagen:', err);
          alert('❌ Error al subir la imagen');
          this.imagenCargando = false;
        }
      });
    }
  }

  actualizar() {
    if (this.plantaForm.valid) {
      const plantaActualizada: PlantaMedicinal = this.plantaForm.value;
      this.plantasService.updatePlanta(this.plantaId, plantaActualizada)
        .then(() => {
          alert('✅ Planta actualizada');
          this.router.navigate(['/plantas']);
        })
        .catch((error) => {
          console.error('❌ Error al actualizar:', error);
          alert('Error al actualizar la planta');
        });
    } else {
      alert('❌ El formulario no es válido');
    }
  }
}
