import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from 'src/app/manager-vendedor/productos/services/products.service';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BuscadorProductosService } from '../../index/menu-index/menu/services/buscador-productos.service';

@Component({
  selector: 'app-shared-products',
  templateUrl: './shared-products.component.html',
  styleUrls: ['./shared-products.component.css'],
})
export class SharedProductsComponent implements OnInit {
  public urlImg = RepositorioImg.urlRepositorio;
  showButton = false; // PARA HABiLiTAR EL BOTON PARA SUBIR A LA PAGINA PRINCIPAL
  private scrollHeigth = 100; //HASTA DE 100PX
  private pageNum = 0; //PAGINA NUMERO 1 DE LA PAGINACION
  public productsArray: any; //AGREGO EL ARRAY
  productsLength = 0; //CUANTOS PRODUCTOS EXiSTE ENVIADO A LA LENGTH
  nombreProduct: any;
  errorMessageProducts: any;
  imgIcons = `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-iconos/shop.png`;
  constructor(
    @Inject(DOCUMENT) private document: Document, //DOCUMENT
    private apiServi: ProductsService, //API PRODUCTOS SERVICES
    private _route: ActivatedRoute,
    private router: Router,
    private apySearchProducts: BuscadorProductosService //BUSCADOR DE PRODUCTOS
  ) {}

  ngOnInit(): void {
    this.getNombreParams();
    this.messageErrorProductsSearchUsers();
  }
  //SUSCRIBE ROUTE PARAMETRO DEL NOMBRE
  getNombreParams() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.nombreProduct = params.get('nombre'); //SI VIENE ALGO NUEVO DE LA URL HAGO EL SUSCRIBE
      this.apiServi.unSuscribeObservable(); //LIMPIO EL OBSERVABLE PARA OBTENER NUEVOS PRODUCTOS SEGUN LA BUSQUEDA
      this.obtenerProductos(); //LLAMO EL OBTENR PRODUCTOS SEGUN LA BUSQUEDA
    });
  }
  //DESTROY OBSERVABLE
  ngOnDestroy() {
    this.apiServi.unSuscribeObservable();
    this.apySearchProducts.unSuscribeDataProducts();
  }
  //MESSAGE OF ERRORS PRODUCTS WHERE SEARCH THE PRODUCT IN THE AUTOCOMPLETE PRODUCT
  messageErrorProductsSearchUsers() {
    this.apySearchProducts.messageSearchUserErrors.subscribe((res) => {
      this.errorMessageProducts = res;
    });
  }
  //OBTENER LOS PRODUCTOS
  obtenerProductos() {
    if (!this.nombreProduct) {
      this.apiServi.getCharacterByPage(this.pageNum, 10).subscribe((res) => {
        this.productsArray = res; //GUARDO EN UN ARRAY LOS PRODUCTOS
        this.apiServi.addProductPagination(res); //AGREGAR AL CARRITO LA PAGINACION
      });
    } else {
      this.apiServi
        .getCharacterSearchByPage(this.nombreProduct)
        .subscribe((res) => {
          this.productsArray = res; //GUARDO EN UN ARRAY LOS PRODUCTOS
          this.apiServi.addProductPagination(res); //AGREGAR AL CARRITO LA PAGINACION
        });
    }
  }
  //HOSTLISTENER SCROLL
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffset = window.pageYOffset; //GUARDO EL SCROLL DEL USUARIO
    const scrollTop = this.document.documentElement.scrollTop; //SCROLLTOP DEL USUARIO
    this.showButton = (yOffset || scrollTop) > this.scrollHeigth; //SI ES MAYOR A 100PX HAGO EL SCROLL INFINITO
  }
  //DETECTAR EL SCROLL DEL HTML
  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  //ON SCROLL DOWN
  onScrollDown(): void {
    this.pageNum++; //Si BAJA SUMO PARA PEDIR LA SIGUIENTE PAGINACION
    this.apiServi.getCharacterByPage(this.pageNum, 10).subscribe((res) => {
      this.apiServi.addProductPagination(res); //GUARDO LO QUE VIENE DE LA PAGINACION
      this.apiServi.productDataPagination.subscribe((res) => {
        this.productsArray = res;
      });
    });
  }

  //DETALLE DEL PRODCUTO
  irAlDetalle(id: any) {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Productos.detalleGetProducto}${id}`
    );
  }
}
