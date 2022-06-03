import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { CategoriasService } from 'src/app/manager-vendedor/productos/services/categorias.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseFormSearchProducts } from '../models/BaseFormSearchProduct';
import { BuscadorProductosService } from '../services/buscador-productos.service';

@Component({
  selector: 'app-autocompletado-productos',
  templateUrl: './autocompletado-productos.component.html',
  styleUrls: ['./autocompletado-productos.component.css'],
})
export class AutocompletadoProductosComponent implements OnInit, OnDestroy {
  listSearchProduct: any = [];
  id: any;
  //CATEGORIAs ITEMS
  categoriaItems: any[] = [];
  constructor(
    private _route: Router,
    private apiAsyncProduct: BuscadorProductosService,
    private apiToken: TokenService,
    private apiCategoria: CategoriasService, //SERVICES CATEGORIA
    public formB: BaseFormSearchProducts
  ) {}
  ngOnDestroy(): void {
    this.apiAsyncProduct.unSuscribeData();
    this.listSearchProduct = [];
  }

  ngOnInit(): void {
    this.getProductsList();
    this.getAllCategorias();
    this.busquedaFrecuenteUsuario();
  }
  //TODAS LAS CATEGORIAS
  getAllCategorias() {
    this.apiCategoria.getAllCategorias().subscribe((res: any) => {
      this.categoriaItems = res;
    });
  }
  //BUSQUEDAS FRECUENTES POR USUARIO
  busquedaFrecuenteUsuario() {
    this.id = this.apiToken.getTokenId();
  }
  //PARA HACER LA PETICION A LA API
  consultar(value: any) {
    this.formB.formSearchProducts.patchValue({
      nombre: value,
    });
    this.buscarProducts();
    this.listSearchProduct = [];
  }
  //BUSCAR PRODUCTOS
  getProductsList() {
    this.apiAsyncProduct.listProduct.subscribe((res) => {
      this.listSearchProduct = res;
    });
  }
  //SUBMIT PRODUCT CUANDO DE ENTER
  submitProduct() {
    this.buscarProducts();
  }

  //SET VALUE GET ERRORS INTENT 3
  errorsMessageIntent(nombre: any) {
    this.apiAsyncProduct
      .buscarProductosIntentos(nombre, { id_usuario: this.id })
      .subscribe((res) => {
        if (res === null) return;
        this.apiAsyncProduct.addMessageErrorsUserProduct(res.mensaje);
      });
  }
  //BUSCAR PRODUCTOS EN LOS REGISTROS
  buscarProducts() {
    const nombre = this.formB.formSearchProducts.get('nombre')?.value;
    this.formB.limpiarFormulario(); //LIMPIAR FORMULARIO
    if (this.id) {
      //SI ESTA LOGGEADO EMPIEZA LA SESION DE INTENTO
      this.errorsMessageIntent(nombre); //ENVIAR POST DE INTENTOS AL USUARIO
      this._route.navigate([
        `/${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}`,
        nombre,
      ]);
      this.listSearchProduct = [];
    } else {
      this._route.navigate([
        `/${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}`,
        nombre,
      ]);
    }
  }
}
