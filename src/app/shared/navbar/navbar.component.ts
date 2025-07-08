import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$!: Observable<any>;
  rol$!: Observable<string>;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.auth.user$;
    this.rol$ = this.auth.user$.pipe(
      map(user => (user as any)?.rol || 'visitante')
    );
  }

  cerrarSesion() {
    this.auth.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}