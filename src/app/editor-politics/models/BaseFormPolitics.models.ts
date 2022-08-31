import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormPolitics {
  constructor(private formB: FormBuilder) {}

  formPolitics = this.formB.group({
    ID: [''],
    DocumentName: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    DocumentVS: ['', [Validators.required]],
    DocumentLink: ['', [Validators.required]],
    Permises: ['', [Validators.required]],
    IdDocument: ['', [Validators.required]],
    latitud: [12],
    longitud: [12],
  });

  limpiarFormulario() {
    this.formPolitics.reset();
  }
}
