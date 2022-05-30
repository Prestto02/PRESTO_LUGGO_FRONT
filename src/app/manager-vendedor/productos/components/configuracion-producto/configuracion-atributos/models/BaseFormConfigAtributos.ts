import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormConfigAtributos {
  constructor(private formB: FormBuilder) {}
  //FORM CONFIG ATRIBUTOS
  formConfigAtributos = this.formB.group({
    atributosVariacion: this.formB.array([], [Validators.required]),
  });
  //TRANSFORMAR EN UN ARRAY LOS COLORES
  get atributosVariacion() {
    return this.formConfigAtributos.controls['atributosVariacion'] as FormArray;
  }
  get multimediAtributos() {
    return this.formConfigAtributos.controls['multimedia'] as FormArray;
  }
  //AÑADIR MAS ATRIBUTOS DE VARIACIONES
  addAtributosVariacion(
    nombre: any,
    descripcion: any,
    idColor?: any,
    idTamano?: any
  ) {
    let atributosForm = this.formB.group({
      NombreAtributos: [nombre, [Validators.required]],
      Descripcion: [descripcion, [Validators.required]],
      Sku: ['', [Validators.pattern(Expresion.Sku)]], //VALIDACIONES
      Estado_Producto: ['', [Validators.required]],
      PrecioPorVariacion: [
        '',
        [Validators.required, Validators.pattern(Expresion.DolarYCentavo)],
      ],
      StockItems: [
        '',
        [Validators.required, Validators.pattern(Expresion.SoloNumeros)],
      ],
      StockMinimo: [
        '',
        [Validators.required, Validators.pattern(Expresion.SoloNumeros)],
      ], //VALIDACIONES
      atributes: this.formB.group({
        id_Color: idColor,
        id_tamaño_articulo: idTamano,
      }),
      multimedia: this.formB.array([], Validators.required),
    });
    this.atributosVariacion.push(atributosForm);
  }
  //AGREGAR IMAGENES EN EL ARRAY
  addImagenes(id: any, imgProduct: any, imgTransfor: any, i: any) {
    let imgArray = this.formB.group({
      /*  id: [id, [Validators.required]],
      imgProductsIcons: [imgProduct, [Validators.required]], */
      archivo: [imgTransfor, [Validators.required]],
    });
    (this.atributosVariacion.at(i).get('multimedia') as FormArray).push(
      imgArray
    ); //OBTENGO LA POSICION DEL ARRAY Y LE HAGO EL PUSH
  }
  //ELIMINAR ITEMS
  removeItems(i: any) {
    this.atributosVariacion.removeAt(i);
  }
  //LIMPIAR FORMULARIO
  limpiarForm() {
    this.formConfigAtributos.reset();
    this.atributosVariacion.clear();
  }
}
