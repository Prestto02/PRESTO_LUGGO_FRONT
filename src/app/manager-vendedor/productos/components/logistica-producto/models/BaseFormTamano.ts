import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormTamanoProducto {
  constructor(private formB: FormBuilder) {}

  formTamanoProducto = this.formB.group({
    Longitud_x: ['', [Validators.pattern(Expresion.DimensionConComa)]],
    Longitud_y: ['', [Validators.pattern(Expresion.DimensionConComa)]],
    Longitud_z: ['', [Validators.pattern(Expresion.DimensionConComa)]],
    Peso: ['', [Validators.pattern(Expresion.DimensionConComa)]],
    TiempoDespacho: [
      '',
      [
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.pattern(Expresion.TiempoDescpacho), //SOLO NUMEROS DEl 1 - 9 y 0-9
      ],
    ],
    GestionEnvio: [''],
  });

  limpiarForm() {
    this.formTamanoProducto.reset();
  }
}
