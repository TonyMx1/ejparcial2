import { Injectable, inject } from '@angular/core';
import { Hamburguesa } from '../models/hamburguesa.model'; // Usa el modelo simplificado
import { first } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HamburguesaService {

  private db: Firestore = inject(Firestore);

  constructor() { }

  // Método para obtener todas las hamburguesas
  getHamburguesas() {
    const hamburguesasCollection = collection(this.db, 'hamburguesas');
    return collectionData(hamburguesasCollection, { idField: 'id' })
      .pipe(first());
  }

  // Método para agregar una nueva hamburguesa
  agregarHamburguesa(hamburguesa: Hamburguesa) {
    const hamburguesasCollection = collection(this.db, 'hamburguesas');
    const hamburguesaData = {
      descripcion: hamburguesa.descripcion, // Solo descripción y precio
      precio: hamburguesa.precio
    };
    addDoc(hamburguesasCollection, hamburguesaData);
  }

  // Método para modificar una hamburguesa existente
  modificarHamburguesa(hamburguesa: Hamburguesa) {
    const documentRef = doc(this.db, 'hamburguesas', hamburguesa.id!); // Asegúrate de que el ID esté definido
    updateDoc(documentRef, {
      descripcion: hamburguesa.descripcion, // Solo descripción y precio
      precio: hamburguesa.precio
    });
  }

  // Método para eliminar una hamburguesa
  eliminarHamburguesa(hamburguesa: Hamburguesa) {
    const documentRef = doc(this.db, 'hamburguesas', hamburguesa.id!); // Asegúrate de que el ID esté definido
    deleteDoc(documentRef);
  }
}