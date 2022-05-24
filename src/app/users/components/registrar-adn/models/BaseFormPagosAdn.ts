import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormPagosAdn {
  constructor(private formB: FormBuilder) {}
  formPagoAdn = this.formB.group({
    Nombre_Titular: ['', [Validators.required]],
    Id_banco: ['', [Validators.required]],
    Identificacion: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/[0-9]{2}[0-9]{8}/),
      ],
    ],
    correo_Electronico: ['', [Validators.required, Validators.email]],
    Tipo_cuenta: ['', [Validators.required]],
    Numero_cuenta: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
  });
}
