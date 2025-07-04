import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home.component',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

goToPlantas() {
  this.router.navigate(['/plantas']);
}
}
