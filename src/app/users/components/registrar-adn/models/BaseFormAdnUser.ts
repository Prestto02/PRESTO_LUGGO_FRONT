import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
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
          Validators.pattern(Expresion.Contrasena),
        ],
      ],
      contrasena_conf: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(Expresion.Contrasena),
        ],
      ],
      CedulaCheck: [''],
      RucCheck: [''],
      Ruc: ['', [Validators.pattern(Expresion.Ruc)]],
      Cedula: ['', [Validators.pattern(Expresion.CedulaTelefono)]],
      NombreCompleto: [
        '',
        [Validators.pattern(Expresion.SoloLetrasAcentosEspaciosSinNumeros)],
      ],
      Razon_Social: [
        '',
        [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)],
      ],
      Inicio_actividades: ['', [Validators.required]],
    },
    { validator: passwordsMustBeEqual }
  );
}
