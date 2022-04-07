import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})
export class ListadoProductosComponent implements OnInit {
  constructor(private apiProducts: ProductsService) {}
  dataProducts: any;
  ngOnInit(): void {
    this.getAllDataProducts();
  }

  getAllDataProducts() {
    this.apiProducts.getDataArticulos().subscribe((res) => {
      this.dataProducts = res;
    });
  }
  //EDIT PRODUCTS
  editarProduct(product: any) {
    console.log(product);
  }
  eliminarProduct(id: any) {
    console.log(id);
  }
}
