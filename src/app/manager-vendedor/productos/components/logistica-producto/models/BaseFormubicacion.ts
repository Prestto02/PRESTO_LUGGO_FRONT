import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormLogisticaProducto {

  constructor(private formB: FormBuilder) {}
  formLogistica = this.formB.group({
    descripcion: ['', [Validators.required]],
    ubicacionProducto: this.formB.array([], [Validators.required]),
  });

  get ubicacionProducto() {
    return this.formLogistica.controls['ubicacionProducto'] as FormArray;
  }

  addUbicacionProducto(descripcion: any, lt: any, lg: any) {
    let formUbicacion = this.formB.group({
      descripcion: [descripcion, [Validators.required]],
      longitud: [lg, [Validators.required]],
      latitud: [lt, [Validators.required]],
    });
    this.ubicacionProducto.push(formUbicacion);
  }
}
