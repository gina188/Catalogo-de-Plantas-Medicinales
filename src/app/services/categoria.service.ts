import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({ providedIn: 'root' })
export class CategoriasService {
  constructor(private firestore: Firestore) {}

  getCategorias(): Observable<Categoria[]> {
    const ref = collection(this.firestore, 'categorias');
    return collectionData(ref, { idField: 'id' }) as Observable<Categoria[]>;
  }

  addCategoria(categoria: Categoria) {
    const ref = collection(this.firestore, 'categorias');
    return addDoc(ref, categoria);
  }

  updateCategoria(id: string, categoria: Partial<Categoria>) {
    const categoriaDoc = doc(this.firestore, `categorias/${id}`);
    return updateDoc(categoriaDoc, categoria);
  }

  deleteCategoria(id: string) {
    const categoriaDoc = doc(this.firestore, `categorias/${id}`);
    return deleteDoc(categoriaDoc);
  }
}
