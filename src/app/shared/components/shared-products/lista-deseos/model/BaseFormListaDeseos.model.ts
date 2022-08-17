import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormListaDeseos {
  constructor(private formB: UntypedFormBuilder) {}
  formListaDeseos = this.formB.group({
    id_lista: [0],
    Id_usuario: [0, [Validators.required]],
    Detalle_Lista_deseos: this.formB.array([
      this.formB.group({
        id_detalle_articulo: [''],
      }),
    ]),
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    Latitud: [''],
    Longitud: [''],
  });
  /* BUSCAR PRODCUTO DE LA LISTA DE DESEOS */
  formSearchDesire = this.formB.group({
    searchProduct: [
      '',
      [Validators.pattern(Expresion.SoloLetrasAcentosEspaciosSinNumeros)],
    ],
  });
  //OBTENER EL ARRAY DE DETALLE LISTA DESEOS
  get detalleArticulos() {
    return this.formListaDeseos.controls['Detalle_Lista_deseos'] as UntypedFormArray; //OBTENGO EL CONTROL DE LISTA DE DESEOS
  }
  //AGREGAR DETALLES DEL ARTICULO
  addDetalleArticulos() {
    this.detalleArticulos.push(
      this.formB.group({
        id_detalle_articulo: ['', [Validators.required]],
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
    this.detalleArticulos.clear();
    this.formListaDeseos.reset();
  }
}
