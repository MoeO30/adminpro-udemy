import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;

  constructor(
    private router: Router,
    private title: Title, // inyectar titulor de la pagina en la pestaña del browser
    private meta: Meta
  ) {
    // inyectar el meta tag que va dentro del html en el header

    this.getDataRoute().subscribe(data => {
      console.log(data);
      // tslint:disable-next-line:max-line-length // sentencia qyue sirve para desabilitar errores de sintaxix
      this.titulo = data.titulo; // titulo que toma del page.router.ts ejem. "{ path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },"
      this.title.setTitle(this.titulo); /// incorpora el nombre de la pagina en la pestaña del browser

      const metaTag: MetaDefinition = {
        // incorpora un tag en el html
        name: 'description',
        content: this.titulo
      };

      this.meta.updateTag(metaTag); /// resultado <meta name="descrition" content="Graficas">
    });
  }

  ngOnInit() { }

  // funcion que sirve para extraer el evento que se esta ejecutando este se comunica a travez
  // del share.module.ts y esta interconectado con el Pages.Module.ts el, share module escucha el acceso
  // a cada pagina que el page.router.ts contiene.
  getDataRoute() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }
}

