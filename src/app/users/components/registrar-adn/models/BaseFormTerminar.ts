import { Injectable } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormTerminarAdn {
  constructor(private formB: UntypedFormBuilder) {}
  formTerminar = this.formB.group({
    DondeEres: ['', [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)]],
    Fecha_Nacimiento: ['',],
    ComoTeDescribes: [
      '',
      [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)],
    ],
  });
}
