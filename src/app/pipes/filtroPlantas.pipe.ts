import { Pipe, PipeTransform } from '@angular/core';
import { PlantaMedicinal } from '../models/planta.model';

@Pipe({
  name: 'filtroPlantas',
  standalone: true
})
export class FiltroPlantasPipe implements PipeTransform {
transform(plantas: PlantaMedicinal[], termino: string = '', region: string = ''): PlantaMedicinal[] {
  if (!plantas) return [];

  const t = termino.toLowerCase();

  return plantas.filter(p =>
    (!termino || p.nombre.toLowerCase().includes(t) || p.region.toLowerCase().includes(t) || p.usos.toLowerCase().includes(t)) &&
    (!region || p.region === region)
  );
}
}
