import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder } from '@angular/forms';
import { BuscadorProductosService } from '../services/buscador-productos.service';
@Injectable({ providedIn: 'root' })
export class BaseFormSearchProducts {
  constructor(
    private formB: FormBuilder,
    private apiServi: BuscadorProductosService
  ) {}
  //BUSCAR PRODUCTOS
  formSearchProducts = this.formB.group({
    id_product: [''],
    categoria: [''],
    nombre: ['', BuscadorAsyncronico.BuscadorAsynProducto(this.apiServi)],
  });
  //LIMPIAR FORMULARIO
  limpiarFormulario() {
    this.formSearchProducts.reset();
  }
}

//BUSCADOR ASYNCRONICO
export class BuscadorAsyncronico {
  static BuscadorAsynProducto(apiServi: BuscadorProductosService) {
    return (control: AbstractControl) => {
      const value = control.value;
      return apiServi.getAllBuscadorProduct(value).subscribe((res) => {
        apiServi.addSearchListProducts(res);
      });
    };
  }
}
