import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormSearchPolitics {
  constructor(private formB: FormBuilder) {}

  searchFormPolitics = this.formB.group({
    search: ['', [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)]],
  });

  limpiarFormulario() {
    this.searchFormPolitics.reset();
  }
}
