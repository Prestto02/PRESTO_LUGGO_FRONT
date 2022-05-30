import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormPagosAdn {
  constructor(private formB: FormBuilder) {}
  formPagoAdn = this.formB.group({
    Nombre_Titular: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    Id_banco: ['', [Validators.required]],
    Identificacion: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(Expresion.CedulaTelefono),
      ],
    ],
    correo_Electronico: ['', [Validators.required, Validators.email]],
    Tipo_cuenta: ['', [Validators.required]],
    Numero_cuenta: [
      '',
      [Validators.required, Validators.pattern(Expresion.SoloNumeros)],
    ],
  });

  //TRANFORMAR A NUMEOR SEGUN LA ELECCION DE USUARIO DE SU TIPO DE CUENTA
  //1 CORRIENTE
  //2 AHORROS
  getByteTipoCuenta() {
    const tipo_cuenta = this.formPagoAdn.get('Tipo_cuenta')?.value;
    if (tipo_cuenta === 1) {
      this.formPagoAdn.patchValue({
        Tipo_cuenta: 1,
      });
    } else if (tipo_cuenta === 2) {
      this.formPagoAdn.patchValue({
        Tipo_cuenta: 2,
      });
    }
  }
}
