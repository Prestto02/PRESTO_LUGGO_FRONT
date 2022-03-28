import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormProducts {
  constructor(private formB: FormBuilder) {}

  formProducts = this.formB.group({
    id_product: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
      ],
    ],
  });
  //BUSCAR PRODUCTOS
  formSearchProducts = this.formB.group({
    id_product: [''],
    categoria: [''],
    nombre: [''],
  });
  getDataForm(latitud?: any, longitud?: any) {
    const dataForm = {
      id_product: this.formProducts.value.id_product,
      latitud,
      longitud,
    };
    return dataForm;
  }
}
