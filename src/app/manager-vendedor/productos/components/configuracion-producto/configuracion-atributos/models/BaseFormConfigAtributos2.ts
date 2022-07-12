import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormConfigAtributos2 {
  constructor(private formB: FormBuilder) {}

  formAtributosDos = this.formB.group({
    Stock_General: [
      '',
      [Validators.required, Validators.pattern(Expresion.SoloNumeros)],
    ],
    Stock_Minimo: [
      '',
      [Validators.required, Validators.pattern(Expresion.SoloNumeros)],
    ],
    PrecioGlobal: [
      '',
      [Validators.required, Validators.pattern(Expresion.DolarYCentavo)],
    ],
    Iva: [false],
    Ice: [false],
  });

  limpiarFormulario() {
    this.formAtributosDos.reset();
  }
}
