import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { PlantaMedicinal } from '../models/planta.model';
import { Observable } from 'rxjs';
import { addDoc } from 'firebase/firestore';
import { doc, deleteDoc } from 'firebase/firestore';

@Injectable({ providedIn: 'root' })
export class PlantasService {
  constructor(private firestore: Firestore) {}

  getPlantas(): Observable<PlantaMedicinal[]> {
    const ref = collection(this.firestore, 'plantas');
    return collectionData(ref, { idField: 'id' }) as Observable<PlantaMedicinal[]>;
  }
  addPlanta(planta: PlantaMedicinal): Promise<any> {
    const ref = collection(this.firestore, 'plantas');
    return addDoc(ref, planta); // Aquí debe estar bien
  }
  

deletePlanta(id: string): Promise<void> {
  const plantaRef = doc(this.firestore, 'plantas', id);
  return deleteDoc(plantaRef);
}

  
}
