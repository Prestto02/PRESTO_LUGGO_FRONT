import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormTamano {
  constructor(private formB: FormBuilder) {}

  formTamano = this.formB.group({
    tamano: this.formB.array([]),
  });
  //TRANSFORMAR EN UN ARRAY LOS TAMANO
  get tamano() {
    return this.formTamano.controls['tamano'] as FormArray;
  }

  //AÑADIR MAS TAMANO
  addTamanoVariacion(tamanoName: any, id: any) {
    let coloresForm = this.formB.group({
      id: [id],
      nameTamano: [tamanoName],
      PrecioPorVariacion: ['', Validators.required],
      StockItems: ['', Validators.required],
      StockMinimo: ['', Validators.required],
    });
    this.tamano.push(coloresForm);
  }
  //ELIMINAR ITEMS POR CHECKED
  removeItemsChecked(nameTamano: any) {
    const valor = this.tamano.controls.findIndex((res) => {
      return res.value.nameTamano === nameTamano; //OBTENGO LA POSICION DEL ARREGLO PARA ELIMINARLO
    });
    this.removeItems(valor); //ELIMINO LA POSICION ENCONTRADA
  }
  //ELIMINAR ITEMS
  removeItems(i: any) {
    this.tamano.removeAt(i);
  }
}
