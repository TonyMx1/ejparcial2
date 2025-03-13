import { Routes } from '@angular/router';
import { Libro } from './models/libro.model';
import { LibroComponent } from './pages/libro/libro.component';
import { HomeComponent } from './pages/home/home.component';
import { HamburguesaComponent } from './pages/hamburguesas/hamburguesas.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductoComponent } from './pages/productos/productos.component';


export const routes: Routes = [
    {
        path: 'libro',
        component: LibroComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'hamburguesa',
        component: HamburguesaComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'productos',
        component: ProductoComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    },
    
];


