import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlantasService } from '../../services/plantas.service';
import { PlantaMedicinal } from '../../models/planta.model';
import { CloudinaryService } from '../../services/cloudinary.service';

@Component({
  selector: 'app-plantas-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './plantas-form.component.html',
  styleUrls: ['./plantas-form.component.css']
})
export class PlantasFormComponent implements OnInit {
  plantaForm!: FormGroup;
  imagenCargando = false;

  constructor(
    private fb: FormBuilder,
    private plantasService: PlantasService,
    private cloudinaryService: CloudinaryService,
    private router: Router,
    private route: ActivatedRoute 
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


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagenCargando = true;
      this.cloudinaryService.uploadImage(file).subscribe({
        next: (res: any) => {
          this.plantaForm.patchValue({ imagenUrl: res.secure_url });
          this.imagenCargando = false;
        },
        error: (err) => {
          console.error('❌ Error al subir imagen:', err);
          this.imagenCargando = false;
          alert('Error al subir la imagen');
        }
      });
    }
  }

  guardar() {
    if (this.plantaForm.valid) {
      const nuevaPlanta: PlantaMedicinal = this.plantaForm.value;
      this.plantasService.addPlanta(nuevaPlanta)
        .then(() => {
          alert('✅ Planta registrada');
          this.router.navigate(['/plantas']);
        })
        .catch(error => {
          console.error('❌ Error al registrar en Firebase:', error);
          alert('Error al registrar la planta.');
        });
    } else {
      alert('❌ El formulario no es válido');
    }
  }
}
