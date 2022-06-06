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

  setValidatorsCedulaNombreCompleto() {
    this.formAdn.get('Cedula')?.setValidators(Validators.required);
    this.formAdn
      .get('Cedula')
      ?.setValidators(Validators.pattern(Expresion.CedulaTelefono));
    this.formAdn.get('NombreCompleto')?.setValidators(Validators.required);
    this.formAdn
      .get('NombreCompleto')
      ?.setValidators(
        Validators.pattern(Expresion.SoloLetrasAcentosEspaciosSinNumeros)
      );
    this.updateValidate('Cedula');
    this.updateValidate('NombreCompleto');
  }

  updateValidate(name: any) {
    this.formAdn.get(name)?.updateValueAndValidity();
  }

  setValidatorsRucCompleto() {
    this.formAdn.get('Ruc')?.setValidators(Validators.required);
    this.formAdn.get('Ruc')?.setValidators(Validators.pattern(Expresion.Ruc));
    this.formAdn.get('Razon_Social')?.setValidators(Validators.required);
    this.formAdn
      .get('Razon_Social')
      ?.setValidators(Validators.pattern(Expresion.SoloLetrasAcentosEspacios));
    this.updateValidate('Ruc');
    this.updateValidate('Razon_Social');
  }

  removeValidateCedulaNombre() {
    this.formAdn.get('Cedula')?.clearValidators();
    this.formAdn.get('NombreCompleto')?.clearValidators();
  }

  removeValidateRuc() {
    this.formAdn.get('Ruc')?.clearValidators();
  }
}
