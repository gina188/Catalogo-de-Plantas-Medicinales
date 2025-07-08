// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import {  setDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth, private firestore: Firestore) {
    onAuthStateChanged(this.auth, async user => {
      if (user) {
        try {
          const ref = doc(this.firestore, 'usuarios', user.uid);
          const snap = await getDoc(ref);
          const userData = snap.exists() ? snap.data() : {};
          (user as any).rol = userData['rol'] || 'visitante'; // inyectamos el rol al objeto user
        } catch (e) {
          console.error('Error obteniendo rol del usuario:', e);
        }
      }
      this.userSubject.next(user);
    });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  get currentUser() {
    return this.auth.currentUser;
  }

registerConRol(email: string, password: string, rol: string = 'usuario') {
  return createUserWithEmailAndPassword(this.auth, email, password).then(cred => {
    const userRef = doc(this.firestore, 'usuarios', cred.user.uid);
    return setDoc(userRef, { email, rol });
  });
}
}
