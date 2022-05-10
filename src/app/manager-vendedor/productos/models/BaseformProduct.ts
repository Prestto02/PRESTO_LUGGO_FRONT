import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormProducts {
  constructor(
    private formB: FormBuilder,
  ) {}
  //FORM PRODUCTOS
  formProducts = this.formB.group(
    {
      id_product: [''],
      nombre_articulo: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(200),
          Validators.pattern(/^[A-Za-z ]+$/),
        ],
      ],
      //detalleArticulo{}
      descripcion_articulo: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(200),
          Validators.pattern(/^[A-Za-z ]+$/),
        ],
      ],
      caracteristicas: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(200),
          Validators.pattern(/^[A-Za-z ]+$/),
        ],
      ],
      marca: ['', [Validators.required]],
      tipo_producto: ['', [Validators.required]],
    },
  );
  //BUSCAR PRODUCTOS
  formSearchProducts = this.formB.group({
    id_product: [''],
    categoria: [''],
    nombre: [''],
  });

  limpiarForm() {
    this.formProducts.reset();
    this.formSearchProducts.reset();
  }
}
  //ENVIAR FORMULARIO DE PRODUCTOS
/*   getDataForm(latitud?: any, longitud?: any, ArticuloTieneCategoria?: any) {
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
    getPatchValueForm(products: any) {
    this.formProducts.patchValue({
      id_product: products.id,
      nombre_articulo: products.name,
      detalleArticulo: {
        valor_unitario: products.precio,
      },
      archivo: products.imagen,
    });
  }  */
