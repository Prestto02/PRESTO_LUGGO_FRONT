import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormConfigAtributos {
  constructor(private formB: FormBuilder) {}

  formConfigAtributos = this.formB.group({
    atributosVariacion: this.formB.array([]),
  });
  //TRANSFORMAR EN UN ARRAY LOS COLORES
  get atributosVariacion() {
    return this.formConfigAtributos.controls['atributosVariacion'] as FormArray;
  }

  //AÑADIR MAS COLORES
  addAtributosVariacion(colorHexadecimal: any, descripcion: any, id: any) {
    let atributosForm = this.formB.group({
      id: [id],
      nombreAtributos: [colorHexadecimal],
      descripcion: [descripcion],
      PrecioPorVariacion: ['', Validators.required],
      StockItems: ['', Validators.required],
      StockMinimo: ['', Validators.required],
    });
    this.atributosVariacion.push(atributosForm);
  }
  //ELIMINAR ITEMS POR CHECKED
  removeItemsChecked(nameColor: any) {
    const valor = this.atributosVariacion.controls.findIndex((res) => {
      return res.value.nombreAtributos === nameColor; //OBTENGO LA POSICION DEL ARREGLO PARA ELIMINARLO
    });
    this.removeItems(valor); //ELIMINO LA POSICION ENCONTRADA
  }
  //ELIMINAR ITEMS
  removeItems(i: any) {
    this.atributosVariacion.removeAt(i);
  }
}
