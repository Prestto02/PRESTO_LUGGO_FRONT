import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from './services/product-details.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css'],
})
export class DetalleProductosComponent implements OnInit {
  productoObjeto: any = [];
  idProduct: any;
  constructor(
    private _router: ActivatedRoute,
    private apiProduct: ProductDetailsService
  ) {
    this.idProduct = this._router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProductById();
  }
  //BUSCO EL PRODUCTO PARA TRAER TODO SU DETALLE
  getProductById() {
    this.apiProduct.getByDetailsProductsId(this.idProduct).subscribe((res) => {
      this.productoObjeto = res;
    });
  }
}
