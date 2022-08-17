import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormEtiquetas {
  constructor(private formB: UntypedFormBuilder) {}
  formEtiquetas = this.formB.group({
    etiquetaForm: [
      '',
      [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)],
    ],
    etiqueta: this.formB.array([], [Validators.required]),
  });
  //TRANSFORMAR EN UN ARRAY LOS TAMANO
  get etiquetas() {
    return this.formEtiquetas.controls['etiqueta'] as UntypedFormArray;
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
  removeItemsEtiqueta(i: number) {
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
