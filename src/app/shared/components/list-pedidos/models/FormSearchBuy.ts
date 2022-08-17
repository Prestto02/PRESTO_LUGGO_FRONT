import { Injectable } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class FormSearchBuy {
  constructor(private formB: UntypedFormBuilder) {}

  formSearch = this.formB.group({
    searchProduct: [
      '',
      [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)],
    ],
  });


}
