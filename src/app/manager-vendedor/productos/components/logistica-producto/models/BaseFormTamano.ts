import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormTamanoProducto {
  constructor(private formB: FormBuilder) {}

  formTamanoProducto = this.formB.group({
    Longitud_x: [
      '',
      [Validators.required, Validators.pattern(/^[0-9]+([,][0-9]+)?$/)],
    ],
    Longitud_y: [
      '',
      [Validators.required, Validators.pattern(/^[0-9]+([,][0-9]+)?$/)],
    ],
    Longitud_z: [
      '',
      [Validators.required, Validators.pattern(/^[0-9]+([,][0-9]+)?$/)],
    ],
    Peso: [
      '',
      [Validators.required, Validators.pattern(/^[0-9]+([,][0-9]+)?$/)],
    ],
    TiempoDespacho: [
      '',
      [
        Validators.required,
        Validators.maxLength(2),
        Validators.pattern(/^[1-9]{1}[0-9]{1}/), //SOLO NUMEROS DEl 1 - 9 y 0-9
      ],
    ],
    GestionEnvio: [''],
  });
}
