import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormAtributosConfig {
  constructor(private formB: FormBuilder) {}

  formAtributos = this.formB.group({
    Color_articulo: this.formB.array([], [Validators.required]),
    id_material: ['', [Validators.required]],
    estado_producto: ['', [Validators.required]],
    modelo: ['', [Validators.required]],

    Peso: this.formB.group({
      peso: ['', [Validators.required]],
    }),

    Tamaño_articulo: this.formB.group({
      Longitud_x: ['', Validators.required],
      Longitud_y: ['', Validators.required],
      Longitud_z: ['', Validators.required],
    }),
  });
  //TRANSFORMAR EL COLOR EN ARREGLO
  get colors() {
    return this.formAtributos.controls['Color_articulo'] as FormArray;
  }
  //AGREGAR NUEVOS COLORES
  addColores(id: any) {
    let formColores = this.formB.group({
      id_Color: [id, [Validators.required]],
    });
    this.colors.push(formColores);
  }
  //ELIMINAR COLORS SEGUN EL CHECK FALSE
  removeCheckColors(id: any, i: any) {
    const index = this.colors.controls.findIndex(
      (res) => res.value.id_Color === id
    );
    this.removeItemsColors(index); //ELIMINAR SEGUN LA POSICION DEL ARREGLO
  }
  //BORRAR DEL ITEMS DEL COLOR DE ARREGLO
  removeItemsColors(i: any) {
    this.colors.removeAt(i);
  }
}
