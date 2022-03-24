import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { PosicionService } from 'src/app/shared/services/posicion.service';
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
    this.positionUser.getPositionUser();
    console.log(
      this.formB.getDataForm(
        this.positionUser.latitud,
        this.positionUser.longitud
      )
    );
  }
}
