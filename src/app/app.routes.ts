import { Routes } from '@angular/router';
import { HomePageComponent } from './content/pages/home/home-page.component';
import { VentasPageComponent } from './content/pages/ventas-page/ventas-page.component';
import { AlquileresPageComponent } from './content/pages/alquileres-page/alquileres-page.component';
import { NosotrosPageComponent } from './content/pages/nosotros-page/nosotros-page.component';
import { ContactoPageComponent } from './content/pages/contacto-page/contacto-page.component';
import { NotFoundPageComponent } from './content/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomePageComponent,
    },
    {
        path:'ventas',
        component: VentasPageComponent,
    },
    {
        path:'alquileres',
        component: AlquileresPageComponent,
    },
    {
        path:'nosotros',
        component: NosotrosPageComponent,
    },
    {
        path:'contacto',
        component: ContactoPageComponent,
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path:'**',
        component: NotFoundPageComponent,
    },
];
