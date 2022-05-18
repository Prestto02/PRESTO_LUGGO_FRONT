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
      [Validators.required, Validators.pattern(/^[0-9]+$ /)],
    ],
    GestionEnvio: [''],
  });
}
