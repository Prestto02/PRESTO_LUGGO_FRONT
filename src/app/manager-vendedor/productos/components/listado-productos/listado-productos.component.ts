import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})
export class ListadoProductosComponent implements OnInit {
  public urlImg = RepositorioImg.urlRepositorio;
  constructor(
    private apiProducts: ProductsService, //PRODUCTS SERVIES
    private _router: Router
  ) {}
  dataProducts: any;
  key: string = 'id'; //ORRDER BY
  reverse: boolean = false; //ORDER BY
  p: number = 1; //PAGINACION EN 1
  searchProducts = '';
  ngOnInit(): void {
    this.getAllDataProducts();
  }
  //OBTENER TODOS LOS PRODUCTOS
  getAllDataProducts() {
    this.apiProducts.getDataProductos().subscribe((res) => {
      this.dataProducts = res;
    });
  }
  //PARA ELIMINAR EL PRODUCTO
  eliminarProduct(id: any) {
    if (confirm(`Se eliminara el producto con id: ${id}`))
      console.log('eliminado');
  }
  editarProduct(product: any) {
    console.log(product);
  }
  //BUSCAR PRODUCTOS
  onSearchProduct(search: any) {
    this.searchProducts = search;
  }
  //SORT ORDER BY
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  irCrearProducto() {
    this._router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.crearProducto}`
    );
  }
}
