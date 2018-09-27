/// en el ruter principal solo se colocan
/// el login, registro de ser necesario y la pagina 404
/// de error cuando no encuentra la ruta espesifica


import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: '**', component: NopagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });

