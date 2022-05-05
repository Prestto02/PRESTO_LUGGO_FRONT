import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormProducts } from 'src/app/manager-vendedor/productos/models/BaseformProduct';

@Component({
  selector: 'app-autocompletado-productos',
  templateUrl: './autocompletado-productos.component.html',
  styleUrls: ['./autocompletado-productos.component.css'],
})
export class AutocompletadoProductosComponent {
  @Input('formGroup') formGroup: any;
  constructor(
    private _route: Router,
    private formB: BaseFormProducts //FORMULARIO PRODUCTOS
  ) {}
  //PARA HACER LA PETICION A LA API
  consultar(e: any) {
    this.formB.formSearchProducts.patchValue({
      nombre: e.target.value,
    });
    this._route.navigateByUrl('success');
  }
}
