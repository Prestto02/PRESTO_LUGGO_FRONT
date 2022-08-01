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
      console.log(this.direccionesArray);
    });
  }
  //EDITAR
  consultGetDireccionId(id: string): void {
    console.log(id);
    this.api.getUserDireccion(id).subscribe((res: Direcciones) => {
      console.log(res);
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
      console.log(res);
    });
    this.formB.limpiarFormulario();
  }
  //ELIMINAR
  eliminarDireccion(id: string): void {
    this.api.delete(id).subscribe((res: any) => {
      console.log(res);
    });
  }
}
