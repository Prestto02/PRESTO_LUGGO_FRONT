import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ProductDetailsService } from './services/product-details.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css'],
})
export class DetalleProductosComponent implements OnInit {
  productoObjeto: any;
  idProduct: any;
  constructor(
    private _router: ActivatedRoute,
    private apiProduct: ProductDetailsService,
    private router: Router
  ) {
    this.idProduct = this._router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProductById();
  }
  //BUSCAR TODOS LOS PRODUCTOS
  verProductos() {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}/todos`
    );
  }
  //BUSCO EL PRODUCTO PARA TRAER TODO SU DETALLE
  getProductById() {
    this.apiProduct.getByDetailsProductsId(this.idProduct).subscribe((res) => {
      this.productoObjeto = res;
    });
  }
}
