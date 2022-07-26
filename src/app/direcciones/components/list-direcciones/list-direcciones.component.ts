import { Component, OnInit } from '@angular/core';
import { ArrayDireccion, Direcciones } from '../../models/Direcciones.models';
import { ModalDialog } from '../services/ModalDialogDireccion.service';

@Component({
  selector: 'app-list-direcciones',
  templateUrl: './list-direcciones.component.html',
  styleUrls: ['./list-direcciones.component.css'],
})
export class ListDireccionesComponent implements OnInit {
  direccionesArray: Direcciones[] = ArrayDireccion;
  constructor(private modal: ModalDialog) {}

  ngOnInit(): void {}
  //EDITAR
  editar(id: number): void {
    this.setModalDialog(true);
  }

  setModalDialog(type: boolean): void {
    this.modal.setStateModal(type);
  }
  //ELIMINAR
  eliminar(id: number): void {
    const direccion = this.direccionesArray.findIndex(
      (res: Direcciones) => res.id === id
    );
    this.direccionesArray.splice(direccion, 1);
  }
}
