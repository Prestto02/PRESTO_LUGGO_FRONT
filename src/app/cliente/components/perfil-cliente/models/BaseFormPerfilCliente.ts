import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormCliente {
  constructor(private formB: FormBuilder) {}

  formCliente = this.formB.group({
    id_usuario: [''],
    nombre1: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    nombre2: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    apellido1: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    apellido2: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    NombreCompleto: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    cedula: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(Expresion.CedulaTelefono),
      ],
    ],
    sexo: ['', [Validators.required]],
    datopersona: this.formB.group({
      direccion1: [
        '',
        [
          Validators.required,
          Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
        ],
      ],
      direccion2: [
        '',
        [
          Validators.required,
          Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
        ],
      ],
      celular: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(Expresion.CedulaTelefono),
        ],
      ],
      telefono: ['', [Validators.pattern(Expresion.CedulaTelefono)]],
      fechanacimiento: [''],
    }),
  });
}
