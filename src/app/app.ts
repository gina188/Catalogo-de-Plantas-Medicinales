import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component'; // ajusta si tu carpeta cambia
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet], // 👈 aquí importas NavbarComponent
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
