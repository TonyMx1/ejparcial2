import { Component } from '@angular/core';
import { Hamburguesa } from '../../models/hamburguesa.model';
import { HamburguesaService } from '../../services/hamburguesa.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-hamburguesa', // Cambia el selector
  imports: [FormsModule],
  templateUrl: './hamburguesas.component.html', // Cambia la ruta del template
  styleUrl: './hamburguesas.component.css' // Cambia la ruta del estilo
})
export class HamburguesaComponent { // Cambia el nombre de la clase

  // Propiedades
  hamburguesas: any; // Cambia la propiedad
  hamburguesa = new Hamburguesa(); // Cambia la propiedad

  constructor(private hamburguesaService: HamburguesaService) { // Cambia el servicio
    this.getHamburguesas(); // Cambia el método
  }

  // Método para obtener el listado de las hamburguesas
  async getHamburguesas(): Promise<void> { // Cambia el método
    this.hamburguesas = await firstValueFrom(this.hamburguesaService.getHamburguesas()); // Cambia el servicio y método
  }

  // Método para insertar una hamburguesa desde el form
  insertarHamburguesa() { // Cambia el método
    this.hamburguesaService.agregarHamburguesa(this.hamburguesa); // Cambia el servicio y método
    this.hamburguesa = new Hamburguesa(); // Reinicia el objeto
    this.getHamburguesas(); // Actualiza la lista
  }

  // Método para seleccionar una hamburguesa de la tabla
  selectHamburguesa(hamburguesaSeleccionada: Hamburguesa) { // Cambia el método
    this.hamburguesa = hamburguesaSeleccionada;
  }

  // Método para modificar una hamburguesa desde el form
  updateHamburguesa() { // Cambia el método
    this.hamburguesaService.modificarHamburguesa(this.hamburguesa); // Cambia el servicio y método
    this.getHamburguesas(); // Actualiza la lista
  }

  // Método para eliminar una hamburguesa
  deleteHamburguesa() { // Cambia el método
    this.hamburguesaService.eliminarHamburguesa(this.hamburguesa); // Cambia el servicio y método
    this.hamburguesa = new Hamburguesa(); // Reinicia el objeto
    this.getHamburguesas(); // Actualiza la lista
  }
}