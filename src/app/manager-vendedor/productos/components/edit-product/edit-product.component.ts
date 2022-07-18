import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ProgressStriper } from './progress-edit/model/Progress.interface';
import { StripersModels } from './ProgressListEdit.interface';

import { EditProductService } from './service/edit-product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  arrayProgress: ProgressStriper[] = StripersModels;
  idProduct: any;
  ruta: string = `${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`;
  productEdit: any;
  constructor(
    private Arouter: ActivatedRoute,
    private apiProduct: EditProductService
  ) {
    this.idProduct = this.idProduct = this.Arouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getEditProduct();
  }

  getEditProduct() {
    this.apiProduct.getProductEditId(this.idProduct).subscribe((res: any) => {
      this.productEdit = res;
    });
  }
}
