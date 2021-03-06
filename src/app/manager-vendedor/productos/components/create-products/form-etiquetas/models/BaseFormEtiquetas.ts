import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormEtiquetas {
  constructor(private formB: FormBuilder) {}
  formEtiquetas = this.formB.group({
    etiquetaForm: [
      '',
      [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)],
    ],
    etiqueta: this.formB.array([], [Validators.required]),
  });
  //TRANSFORMAR EN UN ARRAY LOS TAMANO
  get etiquetas() {
    return this.formEtiquetas.controls['etiqueta'] as FormArray;
  }
  //AÑADIR MAS TAMANO
  addEtiquetas(data: any) {
    let etiquetaForm = this.formB.group({
      nombre: [
        data,
        [
          Validators.required,
          Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
        ],
      ],
    });
    this.etiquetas.push(etiquetaForm);
  }
  //REMOVE ITEMS ETIQUETAS
  removeItemsEtiqueta(i: any) {
    this.etiquetas.removeAt(i);
  }
  //GET ERRORES FORM
  getErrorsForm() {
    return this.formEtiquetas.get('etiqueta')?.errors;
  }
  //LIMPIAR FORMULARIO
  limpiarForm() {
    this.formEtiquetas.reset();
    this.etiquetas.clear();
  }
}
