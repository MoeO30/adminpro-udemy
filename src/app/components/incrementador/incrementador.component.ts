import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  // styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  /// este decorador nos sirve para hacer referencia a los elementos html que existen duplicados
  /// es decir que puedan tener el mismo nombre pero puedan ser afectados por separado la 
  //// sintaxis ElementRef nos imprime o nos puede arrojar todos los atributos o propiedades del 
  // elemento o objeto del html en este caso un input #txtIncrementador 
  @ViewChild('txtIncrementador') txtPorcentaje: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output('actualizar') cambioValor: EventEmitter<number> = new EventEmitter();


  constructor() {

  }

  ngOnInit() {
  }
  onChange(newValue: number) {

    // let elemHTML: any = document.getElementsByName('porcentaje')[0];
     this.txtPorcentaje.nativeElement.value = this.porcentaje;


    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if ( newValue <= 0) {
       this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // elemHTML.value = this.porcentaje;
    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);

  }

  cambiarValor(valor: number) {

    if ( this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
       }

    if ( this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
       }
        this.porcentaje = this.porcentaje + valor;
        this.cambioValor.emit(this.porcentaje);
        this.txtPorcentaje.nativeElement.focus();
   }
}
