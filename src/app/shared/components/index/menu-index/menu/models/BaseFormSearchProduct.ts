import { Injectable } from '@angular/core';
import { AbstractControl, UntypedFormBuilder } from '@angular/forms';
import { BuscadorProductosService } from '../services/buscador-productos.service';
@Injectable({ providedIn: 'root' })
export class BaseFormSearchProducts {
  constructor(
    private formB: UntypedFormBuilder,
    private apiServi: BuscadorProductosService
  ) {}
  //BUSCAR PRODUCTOS
  formSearchProducts = this.formB.group({
    id_product: [''],
    categoria: [''],
    nombre: ['', BuscadorAsyncronico.BuscadorAsynProducto(this.apiServi)],
  });
  //LIMPIAR FORMULARIo
  limpiarFormulario() {
    this.formSearchProducts.patchValue({
      nombre: '',
    });
  }
}

//BUSCADOR ASYNCRONICO
export class BuscadorAsyncronico {
  static BuscadorAsynProducto(apiServi: BuscadorProductosService) {
    return (control: AbstractControl) => {
      const value = control.value;
      if (!value.length)
        return apiServi.getAllBuscadorProduct(value).subscribe((res) => {
          apiServi.addSearchListProducts([]); //SI NO HAY NADA ENVIO VACIO EL ARRAY
        });
      if (value.length >= 1)
        return apiServi.getAllBuscadorProduct(value).subscribe((res) => {
          apiServi.addSearchListProducts(res);
        });
      return;
    };
  }
}
