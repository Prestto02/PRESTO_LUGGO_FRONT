import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormListaDeseos {
  constructor(private formB: FormBuilder) {}
  formListaDeseos = this.formB.group({
    id_lista: [''],
    Id_usuario: ['', [Validators.required]],
    detalle_Lista_deseos: this.formB.array([
      this.formB.group({
        id_articulo: ['',],
      }),
    ]),
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    Latitud: [''],
    Longitud: [''],
  });
  //OBTENER EL ARRAY DE DETALLE LISTA DESEOS
  get detalleArticulos() {
    return this.formListaDeseos.controls['detalle_Lista_deseos'] as FormArray; //OBTENGO EL CONTROL DE LISTA DE DESEOS
  }
  //AGREGAR DETALLES DEL ARTICULO
  addDetalleArticulos() {
    this.detalleArticulos.push(
      this.formB.group({
        id_articulo: ['', [Validators.required]],
      })
    );
  }
  //ELIMINAR ITEMS DE ARTICULOS
  removeDetalleArticulos(index: any) {
    this.detalleArticulos.removeAt(index); //ELIMINAR ARRAY
  }

  //OBTENER Y SETEAR LA POSICION Y ID DEL USUARIO
  setValuePosicionUsuario(latitud?: any, longitud?: any, id?: any) {
    this.formListaDeseos.patchValue({
      Id_usuario: id,
      Latitud: latitud,
      Longitud: longitud,
    });
  }
  //RETORNO LA DATA DEL USUARIO
  getFormListaDeseos() {
    return this.formListaDeseos.value;
  }
  //LIMPIAR FORMULARIO
  limpiar() {
    this.formListaDeseos.reset();
  }
}
