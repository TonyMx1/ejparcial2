import { Component } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-producto', // Cambia el selector
  imports: [FormsModule],
  templateUrl: './productos.component.html', // Cambia la ruta del template
  styleUrl: './productos.component.css' // Cambia la ruta del estilo
})
export class ProductoComponent {

  // Propiedades
  productos: any; // Cambia la propiedad
  producto = new Producto(); // Cambia la propiedad

  constructor(private productoService: ProductoService) { // Cambia el servicio
    this.getProductos(); // Cambia el método
  }

  // Método para obtener el listado de productos
  async getProductos(): Promise<void> { // Cambia el método
    this.productos = await firstValueFrom(this.productoService.getProductos()); // Cambia el servicio
  }

  // Método para insertar un producto
  insertarProducto() { // Cambia el método
    this.productoService.agregarProducto(this.producto); // Cambia el servicio
    this.producto = new Producto(); // Reinicia el objeto
    this.getProductos(); // Actualiza la lista
  }

  // Método para seleccionar un producto
  selectProducto(productoSeleccionado: Producto) { // Cambia el método
    this.producto = productoSeleccionado;
  }

  // Método para modificar un producto
  updateProducto() { // Cambia el método
    this.productoService.modificarProducto(this.producto); // Cambia el servicio
    this.getProductos(); // Actualiza la lista
  }

  // Método para eliminar un producto
  deleteProducto() { // Cambia el método
    this.productoService.eliminarProducto(this.producto); // Cambia el servicio
    this.producto = new Producto(); // Reinicia el objeto
    this.getProductos(); // Actualiza la lista
  }
}