import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PositionUser } from 'src/app/shared/class/PositionUser';
<<<<<<< Updated upstream:src/app/products/components/products.component.ts
import { PosicionService } from 'src/app/shared/services/posicion.service';
import { BaseFormProducts } from '../models/BaseformProduct';
=======
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseFormProducts } from '../models/Perchita/BaseformProduct';
>>>>>>> Stashed changes:src/app/manager-vendedor/productos/components/products.component.ts
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
    this.getAllProducts();
    this.submit();
  }
  //GET ALL PRODUCTS
  getAllProducts() {
    this.apiProduct.getDataArticulos().subscribe(
      (res) => {
        console.log(res);
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
