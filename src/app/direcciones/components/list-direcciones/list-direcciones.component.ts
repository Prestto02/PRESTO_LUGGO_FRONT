import { Component, OnInit } from '@angular/core';
import { FormDireccion } from '../../models/BaseFormDireccion';
import { Direcciones } from '../../models/Direcciones.models';
import { DireccionUsersService } from '../services/direccion-users.service';

@Component({
  selector: 'app-list-direcciones',
  templateUrl: './list-direcciones.component.html',
  styleUrls: ['./list-direcciones.component.css'],
})
export class ListDireccionesComponent implements OnInit {
  direccionesArray: ReadonlyArray<Direcciones> = [];
  dialogVisible: boolean = false;
  dialogVisibleDelete: boolean = false;
  constructor(
    public formB: FormDireccion,
    private api: DireccionUsersService
  ) {}

  ngOnInit(): void {
    this.getAllDirecciones();
  }
  /* TRAER TODAS LAS DIRECCIONES */
  getAllDirecciones(): void {
    /* PETICION AL API PARA LAS DIRECCIONES */
    this.api.getAllDireccionUser().subscribe((res: Direcciones[]) => {
      this.api.setArrayUbicaciones(res);
    });
    /* ME SUSCRIBO AL OBSERVABLE CREADO NUEVO */
    this.api.ubicacionesArray$.subscribe((res: Direcciones[]) => {
      this.direccionesArray = res;
    });
  }
  //EDITAR
  consultGetDireccionId(id: string): void {
    this.api.getUserDireccion(id).subscribe((res: Direcciones) => {
      this.formB.formDireccion.patchValue({ ...res });
    });
    this.dialogVisible = true;
  }
  /* CERRAR MODAL */
  closeModal(): void {
    this.dialogVisible = false;
  }
  /* EDITAR USUARIO */
  editMarket(): void {
    const form = this.formB.formDireccion.value;
    this.api.putDireccion(form).subscribe((res: any) => {
      this.getAllDirecciones();
      this.closeModal();
    });
    this.formB.limpiarFormulario();
  }
  /* CERRAR MODAL DE ELIMINAR */
  cerrarModalDelete(): void {
    this.dialogVisibleDelete = false;
  }
  /* MODAL ABIERTO PARA ELIMINAR */
  modalDelete(id: string): void {
    this.dialogVisibleDelete = true;
    this.formB.formDireccion.patchValue({
      id_direccion: id,
    });
  }
  /* ELIMINAR */
  eliminarDireccion(): void {
    const id = this.formB.formDireccion.get('id_direccion')?.value;
    this.api.delete(id).subscribe((res: any) => {
      this.getAllDirecciones();
    });
    this.cerrarModalDelete();
  }
}
