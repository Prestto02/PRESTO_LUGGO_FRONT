import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos-descripcion',
  templateUrl: './atributos-descripcion.component.html',
  styleUrls: ['./atributos-descripcion.component.css'],
})
export class AtributosDescripcionComponent implements OnInit {
  @Input('productoObjeto') productoObjeto: any | null = null;
  constructor() {}

  ngOnInit(): void {}
}
