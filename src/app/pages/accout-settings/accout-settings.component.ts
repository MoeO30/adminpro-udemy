import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styleUrls: ['./accout-settings.component.css']
})
export class AccoutSettingsComponent implements OnInit {



  constructor( @Inject(DOCUMENT) private document, public settings: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    console.log(tema);
   this.aplicarCheck(link);
    this.settings.aplicarTema( tema );

  }

  aplicarCheck( link: any) {
  let selectores: any = this.document.getElementsByClassName('selector');
  for (let ref of selectores) {
    ref.classList.remove('working');
  }
  link.classList.add('working');

   }
   colocarCheck() {
    let selectores: any = this.document.getElementsByClassName('selector');
    let tema = this.settings.ajustes.tema;
    for (let ref of selectores) {
         if ( ref.getAttribute('data-theme') === tema) {
           ref.classList.add('working');
           break;
         }
      }

   }


}
