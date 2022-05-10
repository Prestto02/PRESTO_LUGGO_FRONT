import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { BaseFormProducts } from '../models/BaseformProduct';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private apiProduct: ProductsService,
    private positionUser: PositionUser,
    public formB: BaseFormProducts
  ) {}

  ngOnInit(): void {
    //this.getAllProducts();
    //this.submit();
  }
  //GET ALL PRODUCTS
  getAllProducts() {
    this.apiProduct.getDataArticulos().subscribe((res) => {
      console.log(res);
    });
  }
  submit() {
    this.positionUser.getPositionUser();
    /* console.log(
      this.formB.getDataForm(
        this.positionUser.latitud,
        this.positionUser.longitud
      )
    ); */
  }
}
