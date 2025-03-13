import { Injectable, inject } from '@angular/core';
import { Producto } from '../models/producto.model';
import { first } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private db: Firestore = inject(Firestore);

  getProductos() {
    const productosCollection = collection(this.db, 'productos');
    return collectionData(productosCollection, { idField: 'id' }).pipe(first());
  }

  agregarProducto(producto: Producto) {
    const productosCollection = collection(this.db, 'productos');
    addDoc(productosCollection, {
      descripcion: producto.descripcion,
      precio: producto.precio
    });
  }

  modificarProducto(producto: Producto) {
    const docRef = doc(this.db, 'productos', producto.id!);
    updateDoc(docRef, {
      descripcion: producto.descripcion,
      precio: producto.precio
    });
  }

  eliminarProducto(producto: Producto) {
    const docRef = doc(this.db, 'productos', producto.id!);
    deleteDoc(docRef);
  }
}