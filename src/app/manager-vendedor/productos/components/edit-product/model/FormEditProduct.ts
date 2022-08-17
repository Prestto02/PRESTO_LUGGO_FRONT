import { Injectable } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class EditFormProducts {
  constructor(private formB: UntypedFormBuilder) {}

  formEditProducts = this.formB.group({
    multimedia: this.formB.group({
      archivo: ['', [Validators.required]],
    }),
    id_product: [0],
    sku: [''],
    marca: [''],
    nombre_articulo: [''],
    descripcion_articulo: [
      '',
      [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(200),
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    Restricciones: ['', [Validators.required]],
    Disponibilidad: ['', [Validators.required]],
    Garantia: ['', [Validators.required]],
    Tipo_Garantia: [
      '',
      [
        Validators.required,
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    ArticuloTieneCategoria: [''],
    etiqueta: [''],
  });

  setFormValue(product: any) {
    this.formEditProducts.patchValue({
      descripcion_articulo: product.descripcion_articulo,
      Disponibilidad: product.disponibilidad,
      Restricciones: product.restricciones,
      sku: product.sku,
      marca: product.marca_Articulo.nombre_marca,
      nombre_articulo: product.nombre_articulo,
      multimedia: {
        archivo: product.multimedia.archivo,
      },
      Garantia: product.garantia_validacion,
      Tipo_Garantia: product.garantia,
    });
  }
}
