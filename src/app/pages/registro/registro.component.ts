import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

registrarse() {
  if (this.form.valid) {
    const { email, password } = this.form.value;
    this.auth.registerConRol(email!, password!, 'usuario')  // 👈 Usa el nuevo método
      .then(() => {
        alert('✅ Registro exitoso');
        this.router.navigate(['/plantas']);
      })
      .catch((err: any) => alert('❌ Error: ' + err.message));
  } else {
    alert('Completa correctamente el formulario.');
  }
}
}
