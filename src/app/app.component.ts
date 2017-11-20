import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nuevoEnlace(nombre: HTMLInputElement, enlace: HTMLInputElement): boolean {
        console.log(`nuevo enlace con nombre ${nombre.value} y enlace ${enlace.value}`);
        return false;
    }
}
