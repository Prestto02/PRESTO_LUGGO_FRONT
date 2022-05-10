import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormConfigProducto {
  constructor(private formB: FormBuilder) {}

  formProductConfig = this.formB.group({
    precioEstandar: ['', [Validators.required]],
    stockGlobal: ['', [Validators.required]],
    stockMinimo: ['', [Validators.required]],
  });

}
