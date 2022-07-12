import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
import { SearchProductsService } from '../services/searchProducts.service';
@Injectable({ providedIn: 'root' })
export class BaseFormProducts {
  constructor(
    private formB: FormBuilder,
    private apiServi: SearchProductsService
  ) {}
  //FORM PRODUCTOS
  formProducts = this.formB.group({
    id_product: [''],
    id_nombre_articulo: [''],
    sku: ['', [Validators.pattern(Expresion.Sku)]], //EXPRESION REGULAR PARA NUMEROS LETRAS CON RAYAS SIN ESPACIOS
    nombre_articulo: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(65),
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
        //LETRA ESPACIO ACENTO Ñ y -_
      ],
      [BuscadorAsyncronico.BuscadorAsynNombreProducto(this.apiServi)],
    ],
    //detalleArticulo{}
    descripcion_articulo: [
      '',
      [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(200),
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios), //LETRA ESPACIO ACENTO Ñ y -_
      ],
    ],
    /*  caracteristicas: [
      '',
      [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(200),
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ], */
    archivo: ['', [Validators.required]],
    Restricciones: ['', [Validators.required]],
    Disponibilidad: ['', [Validators.required]],
    Garantia: ['', [Validators.required]],
    Tipo_Garantia: [
      '',
      [Validators.pattern(Expresion.SoloLetrasAcentosEspacios)],
    ],
    marca: ['', [Validators.required]],
    id_marca: [''],
  });
  limpiarForm() {
    this.formProducts.reset();
  }
}

//BUSCADOR ASYNCRONICO
export class BuscadorAsyncronico {
  static BuscadorAsynNombreProducto(apiServi: SearchProductsService) {
    return (control: AbstractControl) => {
      const value = control.value;
      if (!value.length)
        return apiServi.getNameProduct(value).subscribe((res) => {
          apiServi.addProductName(res);
        }); //SI NO HAY NADA return
      if (value.length >= 1)
        apiServi.getNameProduct(value).subscribe((res) => {
          apiServi.addProductName(res);
          return of(null);
        });
      return of(null);
    };
  }
}
