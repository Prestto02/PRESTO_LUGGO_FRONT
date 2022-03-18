import { Component, OnInit } from '@angular/core';
import { PosicionService } from '../shared/services/posicion.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  cosmeticos: boolean = false;
  herramientas: boolean = false;
  peliculas: boolean=false;
  constructor(
    private apiProduct: ProductsService,
    private location: PosicionService
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
  submit() {
    this.location.getPosition()
  }
}
