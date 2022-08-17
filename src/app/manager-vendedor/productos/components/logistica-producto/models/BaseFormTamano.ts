import { Injectable } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormTamanoProducto {
  constructor(private formB: UntypedFormBuilder) {}

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
    GestionEnvio: ['A'],
    Precio: ['', [Validators.pattern(Expresion.DolarYCentavo)]],
    envio_gratis: [false],
  });

  limpiarForm() {
    this.formTamanoProducto.reset();
  }

  setFormEditProduct(formEdit: any) {
    this.formTamanoProducto.patchValue({
      GestionEnvio: formEdit.logistica.gestion_Envio,
      Precio: formEdit.logistica.precio_envio,
    });
    /* if (formEdit.logistica.gestion_Envio === 'A') {
    } else if (formEdit.logistica.gestion_Envio === 'P') {
      this.formTamanoProducto.patchValue({
        Longitud_x: formEdit.logistica.Longitud_x,
        Longitud_y: formEdit.logistica.Longitud_y,
        Longitud_z: formEdit.logistica.Longitud_z,
        Peso: formEdit.logistica.Peso,
        TiempoDespacho: formEdit.logistica.TiempoDespacho,
      });
    } */
  }
}
