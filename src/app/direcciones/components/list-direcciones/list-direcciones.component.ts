import { Component, OnInit } from '@angular/core';
import { ArrayDireccion, Direcciones } from '../../models/Direcciones.models';

@Component({
  selector: 'app-list-direcciones',
  templateUrl: './list-direcciones.component.html',
  styleUrls: ['./list-direcciones.component.css'],
})
export class ListDireccionesComponent implements OnInit {
  direccionesArray: Direcciones[] = ArrayDireccion;
  constructor() {}

  ngOnInit(): void {}
  editar(id: number): void {
    console.log(id);
  }
  eliminar(id: number): void {
    console.log(id);
  }
}
