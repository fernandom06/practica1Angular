import { Component } from '@angular/core';
import {Articulo} from './articulo/articulo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos: Articulo[];

  constructor() {
    this.articulos = [
      new Articulo('Angular 2', 'http://angular.io', 3),
      new Articulo('Fullstack', 'http://fullstack.io', 2),
      new Articulo('Angular Homepage', 'http://angular.io', 1),
    ];
  }


    nuevoEnlace(nombre: HTMLInputElement, enlace: HTMLInputElement): boolean {
        console.log(`nuevo enlace con nombre ${nombre.value} y enlace ${enlace.value}`);
        return false;
    }
}
