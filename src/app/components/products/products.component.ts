import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PosicionService } from '../shared/services/posicion.service';
import { BaseFormProducts } from './models/BaseformProduct';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  cosmeticos: boolean = false;
  herramientas: boolean = false;
  peliculas: boolean = false;
  constructor(
    private apiProduct: ProductsService,
    private location: PosicionService,
    public formB: BaseFormProducts
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.submit();
  }
  //GET ALL PRODUCTS
  getAllProducts() {
    this.apiProduct.getDataArticulos().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  get id_productControl():FormControl{
    return this.formB.formProducts.get('id_product')as FormControl;
  }
  submit() {
    this.formB.formProducts.value;
    this.location.getPosition();
  }
}
