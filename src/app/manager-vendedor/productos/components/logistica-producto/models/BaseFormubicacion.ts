import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormLogisticaProducto {
  constructor(private formB: UntypedFormBuilder) {}
  formLogistica = this.formB.group({
    descripcion: [''],
    ubicacionProducto: this.formB.array([], [Validators.required]),
  });

  get ubicacionProducto() {
    return this.formLogistica.controls['ubicacionProducto'] as UntypedFormArray;
  }
  //AGREGAR NUEVA UBICACION DEL PRODUCTO
  addUbicacionProducto(descripcion: any, lt: any, lg: any) {
    let formUbicacion = this.formB.group({
      DescripcionUbicacion: [descripcion, [Validators.required]],
      LongitudArticulo: [lg, [Validators.required]],
      LatitudArticulo: [lt, [Validators.required]],
    });
    this.ubicacionProducto.push(formUbicacion);
  }
  //LIMPIAR FORMULARIO
  limpiarForm() {
    this.formLogistica.reset();
    this.ubicacionProducto.clear();
  }
}
