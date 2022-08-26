import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormPolitics {
  constructor(private formB: FormBuilder) {}

  formPolitics = this.formB.group({
    ID: ['', [Validators.pattern(Expresion.CedulaTelefono)]],
    DocumentName: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    DocumentVS: [
      '',
      [Validators.required, Validators.pattern(Expresion.CedulaTelefono)],
    ],
    DocumentLink: ['', [Validators.required]],
    Permises: [
      0,
      [Validators.required, Validators.pattern(Expresion.CedulaTelefono)],
    ],
    IdDocument: [0, [Validators.required]],
  });

  limpiarFormulario() {
    this.formPolitics.reset();
  }
}
