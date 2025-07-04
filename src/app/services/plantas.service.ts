import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { PlantaMedicinal } from '../models/planta.model';
import { Observable } from 'rxjs';
import { addDoc,deleteDoc } from 'firebase/firestore';
import { docData } from '@angular/fire/firestore'; // ✅ CORRECTO




@Injectable({ providedIn: 'root' })
export class PlantasService {
  constructor(private firestore: Firestore) {}

  getPlantas(): Observable<PlantaMedicinal[]> {
    const ref = collection(this.firestore, 'plantas');
    return collectionData(ref, { idField: 'id' }) as Observable<PlantaMedicinal[]>;
  }

  addPlanta(planta: PlantaMedicinal): Promise<any> {
    const ref = collection(this.firestore, 'plantas');
    return addDoc(ref, planta);
  }

getPlantaById(id: string): Observable<PlantaMedicinal | undefined> {
  const ref = doc(this.firestore, `plantas/${id}`);
  return docData(ref, { idField: 'id' }) as Observable<PlantaMedicinal | undefined>;
}

  actualizarPlanta(id: string, planta: Partial<PlantaMedicinal>): Promise<void> {
    const ref = doc(this.firestore, 'plantas', id);
    return updateDoc(ref, planta);
  }
  deletePlanta(id: string): Promise<void> {
  const ref = doc(this.firestore, 'plantas', id);
  return deleteDoc(ref);
}
updatePlanta(id: string, data: Partial<PlantaMedicinal>) {
  const ref = doc(this.firestore, 'plantas', id);
  return updateDoc(ref, data);
}
}
