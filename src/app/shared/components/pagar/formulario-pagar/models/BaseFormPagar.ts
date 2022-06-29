import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormPagar {
  constructor(private formB: FormBuilder) {}

  formPagar = this.formB.group({
    Nombres: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    Apellidos: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    cliente_phone: [
      '',
      [Validators.required, Validators.pattern(Expresion.SoloNumeros)],
    ],
    code_phone: [593, [Validators.required]],
    identificacion: [
      '',
      [Validators.required, Validators.pattern(Expresion.CedulaTelefono)],
    ],
    direccion_entrega: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    correo: ['', [Validators.required, Validators.email]],
  });

  limpiarFormulario() {
    this.formPagar.reset();
  }
}
