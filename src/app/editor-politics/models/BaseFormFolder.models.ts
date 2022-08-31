import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseFormFolders {
  constructor(private formB: FormBuilder) {}
  formFolder = this.formB.group({
    nameFolder: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    id_FolderDocument: [
      '',
      [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)],
    ],
  });

  limpiarFormulario(): void {
    this.formFolder.reset();
  }
}
