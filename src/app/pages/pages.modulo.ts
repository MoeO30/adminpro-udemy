import { NgModule } from '@angular/core';

/// RUTAS
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresComponent } from './progres/progres.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModulo } from '../shared/shared.modulo';



@NgModule({
declarations: [
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    PagesComponent,
], exports: [
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    PagesComponent,
   ],
   imports: [
    SharedModulo,
    PAGES_ROUTES
   ]



})

export class PagesModule { }