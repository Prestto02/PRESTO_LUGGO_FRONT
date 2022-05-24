import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormColors {
  constructor(private formB: FormBuilder) {}

  formColors = this.formB.group({
    idColor: 1,
    idTamano: 3,
    colores: this.formB.array([]),
  });
  //TRANSFORMAR EN UN ARRAY LOS COLORES
  get colores() {
    return this.formColors.controls['colores'] as FormArray;
  }

  //AÑADIR MAS COLORES
  addColorVariacion(colorHexadecimal: any, nameColor: any, id: any) {
    let coloresForm = this.formB.group({
      id: [id],
      coloresEscogido: [colorHexadecimal],
      nameColor: [nameColor],
      PrecioPorVariacion: ['', Validators.required],
      StockItems: ['', Validators.required],
      StockMinimo: ['', Validators.required],
    });
    this.colores.push(coloresForm);
  }
  //ELIMINAR ITEMS POR CHECKED
  removeItemsChecked(nameColor: any) {
    const valor = this.colores.controls.findIndex((res) => {
      return res.value.nameColor === nameColor; //OBTENGO LA POSICION DEL ARREGLO PARA ELIMINARLO
    });
    this.removeItems(valor); //ELIMINO LA POSICION ENCONTRADA
  }
  //ELIMINAR ITEMS
  removeItems(i: any) {
    this.colores.removeAt(i);
  }
}
