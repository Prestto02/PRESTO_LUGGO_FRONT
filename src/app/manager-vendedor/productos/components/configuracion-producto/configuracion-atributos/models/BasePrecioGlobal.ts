import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormGlobalPrecio {
  constructor(private formB: FormBuilder) {}

  formGlobalPrecio = this.formB.group({
    PrecioGlobal: ['', [Validators.pattern(/^[0-9]+([,][0-9]+)?$/)]],
  });
}
