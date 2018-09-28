/// con las rutas hijas los componentes que forman el avance de
/// las paginas de de termina de la siguiente manera

import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresComponent } from './progres/progres.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';


const pagesRoutes: Routes = [
    {path: '', component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgresComponent},
        {path: 'grafica1', component: Graficas1Component},
        {path: 'account-settings', component: AccoutSettingsComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
}

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes ); // se exporta como forChild
