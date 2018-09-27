import { FormsModule } from '@angular/forms';


// chart
import { ChartsModule } from 'ng2-charts';

import { NgModule } from '@angular/core';

/// RUTAS
import { PAGES_ROUTES } from './pages.router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresComponent } from './progres/progres.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModulo } from '../shared/shared.modulo';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficodonaComponent } from '../components/graficodona/graficodona.component';





@NgModule({
declarations: [  /// se declaran los compoentes
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficodonaComponent
], exports: [
    DashboardComponent, /// se expotan los compoenentes para que puedan ser utilizados en otro lado
    ProgresComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficodonaComponent
   ],
   imports: [
    FormsModule,
    SharedModulo, /// Se importa el modulo de shared
    PAGES_ROUTES, /// se importan las rutas del pages
    ChartsModule

   ]



})

export class PagesModule { }
