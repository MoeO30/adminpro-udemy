import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes: Ajustes = {
  temaUrl: 'assets/css/color/default.css',
  tema: 'default',
};

  constructor(@Inject(DOCUMENT) private document) {
    this.cargarAjustes();
  }


guardarAjustes() {
localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
}

cargarAjustes() {

  if ( localStorage.getItem('ajustes')) {
    this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    // console.log('usando del localstorage');

    this.aplicarTema( this.ajustes.tema );
  } else {
    // tslint:disable-next-line:semicolon
    // console.log('usando valores por defecto')
    this.aplicarTema( this.ajustes.tema );
  }
}


aplicarTema(tema: string) {
  // console.log(tema);

  let url = `assets/css/colors/${tema}.css`;
  this.document.getElementById('tema').setAttribute('href', url);
  this.ajustes.tema = tema;
  this.ajustes.temaUrl = url;
  this.guardarAjustes();
}

}
interface Ajustes  {
  temaUrl: string;
  tema: string;
}
