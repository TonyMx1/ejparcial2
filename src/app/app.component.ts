import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroComponent } from "./pages/libro/libro.component";
import { HomeComponent } from "./pages/home/home.component";
import { MenuComponent } from "./pages/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo6';
}
