import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { DataFormProducts } from '../../helpers/DataFormProducts';
import { ProductsService } from '../../services/products.service';
import { EditProductService } from '../edit-product/service/edit-product.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})
export class ListadoProductosComponent implements OnInit {
  public urlImg = RepositorioImg.urlRepositorio;
  img2 = `${RepositorioImg.urlRepositorio}img/IMÁGENES/audifonos_sony.jpeg`;
  constructor(
    private apiProducts: ProductsService, //PRODUCTS SERVIES
    private _router: Router,
    private dataForm: DataFormProducts,
    private position: PositionUser, //POSITION USUARIO
    private apiEditProduct: EditProductService
  ) {}

  dataProducts: any; //ARRAY DE LOS PRODUCTOS
  key: string = 'id'; //ORRDER BY
  reverse: boolean = false; //ORDER BY
  p: number = 1; //PAGINACION EN 1
  searchProducts = '';
  load = false;

  ngOnInit(): void {
    this.position.getPositionUser();
    this.getAllProducts();
  }

  //OBTENER TODOS LOS PRODUCTOS
  getAllProducts() {
    this.load = true;
    setTimeout(() => {
      this.apiProducts.getDataProductos().subscribe((res) => {
        this.dataProducts = res;
      });
      this.load = false;
    }, 2500);
  }
  //PARA ELIMINAR EL PRODUCTO
  eliminarProduct(id: any) {
    if (confirm(`Se eliminara el producto con id: ${id}`)) {
      this.apiProducts.eliminarProducto(id).subscribe((res: any) => {
        this.getAllProducts();
      });
    }
  }
  //EDITAR PRODUCTOS
  editarProduct(product: any) {
    this._router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.editarProductGet}/${product}`
    );
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
  //GUARDAR PRODUCTO POST
  postProductProduct() {
    const form = this.dataForm.getDataFormProducts(
      this.position.longitud,
      this.position.latitud
    );
    this.apiProducts.postDataArticulo(form).subscribe((res) => {
      this.getAllProducts();
    });
    this.dataForm.limpiarTodoForm();
    this._router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`
    );
  }

  putProduct() {
    const form = this.dataForm.getEditFormProducts(
      this.position.longitud,
      this.position.latitud
    );
    this.apiEditProduct.editProduct(form, form.Id_articulo).subscribe((res) => {
      this.getAllProducts();
    });
    this.dataForm.limpiarTodoForm();
    this._router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`
    );
  }
  //GUARDAR EL PRODUCTO
  guardarProduct(id?: boolean) {
    if (id) {
      this.putProduct();
    } else {
      this.postProductProduct();
    }
  }
}
