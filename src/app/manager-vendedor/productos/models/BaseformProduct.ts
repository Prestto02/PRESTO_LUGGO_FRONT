import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormProducts {
  constructor(private formB: FormBuilder) {}
  //FORM PRODUCTOS
  formProducts = this.formB.group({
    id_product: [''],
    nombre_articulo: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
        Validators.pattern(/^[A-Za-z ]+$/),
      ],
    ],
    //detalleArticulo{}
    detalleArticulo: this.formB.group({
      descripcion_articulo: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.pattern(/^[A-Za-z ]+$/),
        ],
      ],
      cantidad: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
          Validators.pattern(/^[1-9$]*$/),
        ],
      ],
      valor_unitario: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(/^[0-9]+([,][0-9]{2})?$/),
        ],
      ],
    }),
    //caracteristica_Articulo{}
    caracteristica_Articulo: this.formB.group({
      idtamaño_alto: [1],
    }),
    //multimedia[{}]
    archivo: [''],
  });
  //BUSCAR PRODUCTOS
  formSearchProducts = this.formB.group({
    id_product: [''],
    categoria: [''],
    nombre: [''],
  });

  //ENVIAR FORMULARIO DE PRODUCTOS
  getDataForm(latitud?: any, longitud?: any, ArticuloTieneCategoria?: any) {
    return {
      nombre_articulo: this.formProducts.value.nombre_articulo,
      detalleArticulo: this.formProducts.value.detalleArticulo,
      caracteristica_Articulo: this.formProducts.value.caracteristica_Articulo,
      ArticuloTieneCategoria,
      multimedia: [
        {
          archivo: this.formProducts.value.archivo,
        },
      ],
      latitud,
      longitud,
    };
  }
  limpiarForm() {
    this.formProducts.reset();
    this.formSearchProducts.reset();
  }
}
