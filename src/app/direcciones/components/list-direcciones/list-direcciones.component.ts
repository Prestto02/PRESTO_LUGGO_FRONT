import { Component, OnInit } from '@angular/core';
import { ArrayDireccion, Direcciones } from '../../models/Direcciones.models';

@Component({
  selector: 'app-list-direcciones',
  templateUrl: './list-direcciones.component.html',
  styleUrls: ['./list-direcciones.component.css'],
})
export class ListDireccionesComponent implements OnInit {
  direccionesArray: Direcciones[] = ArrayDireccion;
  dialogVisible: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  //EDITAR
  editar(id: number): void {
    this.dialogVisible = true;
    //this.setModalDialog(true);
  }
  closeModal(): void {
    this.dialogVisible = false;
  }
  editMarket(): void {

  }
  //ELIMINAR
  eliminar(id: number): void {
    const direccion = this.direccionesArray.findIndex(
      (res: Direcciones) => res.id === id
    );
    this.direccionesArray.splice(direccion, 1);
  }
}
