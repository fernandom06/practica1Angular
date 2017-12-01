import {Component, OnInit, Input} from '@angular/core';
import {Articulo} from './articulo.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input() articulo: Articulo;


  constructor() {}


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
