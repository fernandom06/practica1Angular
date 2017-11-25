import {Component, OnInit} from '@angular/core';
import {Articulo} from './articulo.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulo: Articulo;


  constructor() {
    this.articulo = new Articulo(
      'Marca', 'http://marca.com', 10
    );
  }


  voteUp(): boolean {
    this.articulo.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.articulo.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
