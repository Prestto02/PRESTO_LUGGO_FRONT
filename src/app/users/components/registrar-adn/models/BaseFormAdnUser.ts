import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordsMustBeEqual } from './passwordEquaslAdn';
@Injectable({ providedIn: 'root' })
export class BaseFormAdnUsers {
  constructor(private formB: FormBuilder) {}

  formAdn = this.formB.group(
    {
      user: ['', [Validators.required, Validators.email]],
      pass: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
        ],
      ],
      contrasena_conf: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
        ],
      ],
      Ruc: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]],
      Razon_Social: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
        ],
      ],
      Inicio_actividades: ['', [Validators.required]],
    },
    { validator: passwordsMustBeEqual }
  );

}
