import { Injectable } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class FormDireccion {
  constructor(private formB: UntypedFormBuilder) {}

  formDireccion = this.formB.group({
    id_direccion: [''],
    descripcion: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(200),
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    telefono: [
      '',
      [Validators.required, Validators.pattern(Expresion.CedulaTelefono)],
    ],
    referencia: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    latitud_direccion: [0, [Validators.required]],
    longitud_direccion: [0, [Validators.required]],
    latitud: [],
    longitud: [],
  });

  limpiarFormulario() {
    this.formDireccion.reset();
  }
}
