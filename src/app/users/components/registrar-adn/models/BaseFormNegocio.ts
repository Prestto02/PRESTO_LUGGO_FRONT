import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormNegocioAdn {
  constructor(private formB: FormBuilder) {}

  formNegocioAdn = this.formB.group({
    Nombre_Tienda: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ],
    Ciudad: ['', [Validators.required]],
    Pais: ['', [Validators.required]],
    Direccion: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ],
    Sucursales: [false, [Validators.required]],
    Telefono_contacto: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/[0-9]{2}[0-9]{8}/),
      ],
    ],
    descripcion_outline: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ],
  });
}
