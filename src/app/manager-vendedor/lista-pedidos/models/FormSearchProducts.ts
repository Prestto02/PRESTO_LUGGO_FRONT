import { Injectable } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class FormSearchProducts {
  constructor(private formB: UntypedFormBuilder) {}

  formSearch = this.formB.group({
    buscador: ['', [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)]],
  });
}
