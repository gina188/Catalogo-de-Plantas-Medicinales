import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PlantasComponent } from './plantas.component';
import { FiltroPlantasPipe } from '../../pipes/filtroPlantas.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PlantasComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FiltroPlantasPipe,
    PlantasComponent,
    RouterModule.forChild(routes)
  ]
})
export class PlantasModule {}
