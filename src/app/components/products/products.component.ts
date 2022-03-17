import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private apiProduct: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
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
}
