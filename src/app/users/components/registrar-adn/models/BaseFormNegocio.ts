import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormNegocioAdn {
  constructor(private formB: FormBuilder) {}

  formNegocioAdn = this.formB.group({
    Nombre_Tienda: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    Ciudad: ['', [Validators.required]],
    Pais: ['', [Validators.required]],
    Direccion: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    Sucursales: [false, [Validators.required]],
    Telefono_contacto: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(Expresion.CedulaTelefono),
      ],
    ],
    descripcion_outline: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
  });
  //ENVIO EL BOOLEANO DE SUCURSALES
  getBooleanSucursales() {
    const sucursales_boolean = this.formNegocioAdn.get('Sucursales')?.value;
    if (sucursales_boolean === 'true') {
      this.formNegocioAdn.patchValue({
        Sucursales: true,
      });
    } else {
      this.formNegocioAdn.patchValue({
        Sucursales: false,
      });
    }
  }
}
