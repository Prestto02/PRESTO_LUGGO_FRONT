import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class FormSearchProducts {
  constructor(private formB: FormBuilder) {}

  formSearch = this.formB.group({
    buscador: ['', [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)]],
  });
}
