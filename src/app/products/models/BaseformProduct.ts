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
    //caracteristica_Articulo{}
    idtamaño_alto: [1],
    //ArticuloTieneCategoria[{}]
    idcategoria_articulo: [4],
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
  getDataForm(latitud?: any, longitud?: any) {
    return {
      nombre_articulo: this.formProducts.value.nombre_articulo,
      detalleArticulo: {
        descripcion_articulo: this.formProducts.value.descripcion_articulo,
        cantidad: this.formProducts.value.cantidad,
        valor_unitario: this.formProducts.value.valor_unitario,
      },
      caracteristica_Articulo: {
        idtamaño_alto: this.formProducts.value.idtamaño_alto,
      },
      ArticuloTieneCategoria: [
        {
          idcategoria_articulo: this.formProducts.value.idcategoria_articulo,
        },
      ],
      multimedia: [
        {
          archivo: this.formProducts.value.archivo,
        },
      ],
      latitud,
      longitud,
    };
  }
}
