import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private formB:BaseFormSearchProducts
  ) {}
  ngOnInit(): void {
    this.getProductsList();
  }
  //PARA HACER LA PETICION A LA API
  consultar(e: any) {
     this.formB.formSearchProducts.patchValue({
      nombre: e.target.value,
    });
    //this._route.navigateByUrl('success');
  }
  getProductsList() {
    this.apiAsyncProduct.listProduct.subscribe((res) => {
      console.log(res);
      this.listSearchProduct = res;
    });
  }
}
