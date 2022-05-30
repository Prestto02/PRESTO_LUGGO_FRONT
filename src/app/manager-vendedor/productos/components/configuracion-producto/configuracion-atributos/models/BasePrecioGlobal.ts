import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormGlobalPrecio {
  constructor(private formB: FormBuilder) {}

  formGlobalPrecio = this.formB.group({
    PrecioGlobal: ['', [Validators.pattern(Expresion.DolarYCentavo)]],
  });
}
