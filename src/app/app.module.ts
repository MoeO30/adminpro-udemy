/// En el moduluo pricipal solo van las importaciones de los componentes
/// que el app.router.ts manejara en este caso solo el login y el registro
///  de ser necesario para la aplicacion
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/// RUTAS
import { APP_ROUTES } from './app.router';

/// MODULOS
import { PagesModule } from './pages/pages.modulo';

/// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

/// MODULO DE SERVICIOS
import { ServiceModule } from './services/service.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    ServiceModule, // // este modulo maneja todos los servicios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
