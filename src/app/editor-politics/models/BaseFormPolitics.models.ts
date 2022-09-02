import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormPolitics {
  constructor(private formB: FormBuilder) {}

  formPolitics = this.formB.group({
    id: [''],
    documentName: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    documentVS: ['', [Validators.required]],
    documentLink: ['', [Validators.required]],
    permises: ['', [Validators.required]],
    docHeredate: ['', [Validators.required]],
    latitud: [0],
    longitud: [0],
  });

  limpiarFormulario() {
    this.formPolitics.reset();
  }
}
