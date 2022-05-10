import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseFormSearchProducts } from '../models/BaseFormSearchProduct';
import { BuscadorProductosService } from '../services/buscador-productos.service';

@Component({
  selector: 'app-autocompletado-productos',
  templateUrl: './autocompletado-productos.component.html',
  styleUrls: ['./autocompletado-productos.component.css'],
})
export class AutocompletadoProductosComponent implements OnInit {
  @Input('formGroup') formGroup: any;
  listSearchProduct: any = [];
  constructor(
    private _route: Router,
    private apiAsyncProduct: BuscadorProductosService,
    private formB: BaseFormSearchProducts
  ) {}
  ngOnInit(): void {
    this.getProductsList();
  }
  //PARA HACER LA PETICION A LA API
  consultar(e: any) {
    this.formB.formSearchProducts.patchValue({
      nombre: e.target.value,
    });
    const nombre = this.formB.formSearchProducts.get('nombre')?.value;
    this._route.navigate([
      `/${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}`,
      nombre,
    ]);
  }
  getProductsList() {
    this.apiAsyncProduct.listProduct.subscribe((res) => {
      this.listSearchProduct = res;
    });
  }
}
