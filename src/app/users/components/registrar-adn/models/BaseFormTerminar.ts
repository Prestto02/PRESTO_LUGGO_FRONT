import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormTerminarAdn {
  constructor(private formB: FormBuilder) {}
  formTerminar = this.formB.group({
    DondeEres: ['', [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)]],
    Fecha_Nacimiento: ['',],
    ComoTeDescribes: [
      '',
      [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)],
    ],
  });
}
