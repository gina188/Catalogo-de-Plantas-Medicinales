import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlantasComponent } from './pages/plantas/plantas.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PlantasFormComponent } from './pages/plantas-form/plantas-form.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'plantas', component: PlantasComponent },
  { path: 'plantas/nueva', component: PlantasFormComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '' }
];
