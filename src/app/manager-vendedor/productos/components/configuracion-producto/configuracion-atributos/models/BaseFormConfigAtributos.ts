import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
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
  //AÑADIR MAS ATRIBUTOS DE VARIACIONES
  addAtributosVariacion(nombre: any, descripcion: any) {
    let atributosForm = this.formB.group({
      NombreAtributos: [nombre, [Validators.required]],
      Descripcion: [descripcion, [Validators.required]],
      Sku: ['', [, Validators.pattern(/^[A-Za-z0-9-_ ]+$/)]], //VALIDACIONES
      Estado_Producto: ['', [Validators.required]],
      PrecioPorVariacion: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]+([,][0-9]+)?$/)],
      ],
      StockItems: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      StockMinimo: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], //VALIDACIONES
      multimedia: this.formB.array([], Validators.required),
    });
    this.atributosVariacion.push(atributosForm);
  }
  //AGREGAR IMAGENES EN EL ARRAY
  addImagenes(id: any, imgProduct: any, imgTransfor: any, i: any) {
    let imgArray = this.formB.group({
      /*       id: [id, [Validators.required]],
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
