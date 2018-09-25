import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresComponent } from './progres/progres.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const pagesRoutes: Routes = [
    {path: '', component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgresComponent},
        {path: 'grafica1', component: Graficas1Component},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
}

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
