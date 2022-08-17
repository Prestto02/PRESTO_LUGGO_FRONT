import { Injectable } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormGlobalPrecio {
  constructor(private formB: UntypedFormBuilder) {}

  formGlobalPrecio = this.formB.group({
    PrecioGlobal: [
      '',
      [Validators.required, Validators.pattern(Expresion.DolarYCentavo)],
    ],
  });

  limpiarForm() {
    this.formGlobalPrecio.reset();
  }
}
