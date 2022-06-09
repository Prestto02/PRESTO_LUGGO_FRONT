import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormAtributosConfig {
  constructor(private formB: FormBuilder) {}

  formAtributos = this.formB.group({
    Color_articulo: this.formB.array([], [Validators.required]),
    Material_constituido: this.formB.group({
      nombre_material: [
        '',
        [
          Validators.required,
          Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
        ],
      ],
    }),
    estado_producto: ['', [Validators.required]],
    modelo: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    Capacidad: this.formB.group({
      Cantidad: ['', [Validators.pattern(Expresion.DimensionConComa)]],
    }),
    Potencia: this.formB.group({
      Potencia_valor: ['', [Validators.pattern(Expresion.DimensionConComa)]],
    }),
    Peso: this.formB.group({
      peso: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
    }),

    Tamaño_articulo: this.formB.group({
      Longitud_x: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
      Longitud_y: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
      Longitud_z: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
    }),
  });
  //TRANSFORMAR EL COLOR EN ARREGLO
  get colors() {
    return this.formAtributos.controls['Color_articulo'] as FormArray;
  }
  //AGREGAR NUEVOS COLORES
  addColores(id: any, nombre: any) {
    let formColores = this.formB.group({
      id_Color: [id, [Validators.required]],
      nombre: [nombre, [Validators.required]],
    });
    this.colors.push(formColores);
  }
  //ELIMINAR COLORS SEGUN EL CHECK FALSE
  removeCheckColors(id: any) {
    const index = this.colors.controls.findIndex(
      (res) => res.value.id_Color === id
    );
    this.removeItemsColors(index); //ELIMINAR SEGUN LA POSICION DEL ARREGLO
  }
  //BORRAR DEL ITEMS DEL COLOR DE ARREGLO
  removeItemsColors(i: any) {
    this.colors.removeAt(i);
  }
  limpiarFormulario() {
    this.formAtributos.reset();
    this.colors.clear();
  }
}
