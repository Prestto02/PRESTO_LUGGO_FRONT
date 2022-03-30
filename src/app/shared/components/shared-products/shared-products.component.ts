import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { CarritoItemsComponent } from '../index/menu/carrito-items/carrito-items.component';
import { CarritoItemsService } from '../index/menu/services/carrito-items.service';

@Component({
  selector: 'app-shared-products',
  templateUrl: './shared-products.component.html',
  styleUrls: ['./shared-products.component.css'],
})
export class SharedProductsComponent implements OnInit {
  showButton = false; // PARA HABiLiTAR EL BOTON PARA SUBIR A LA PAGINA PRINCIPAL
  private scrollHeigth = 100; //HASTA DE 100PX
  private pageNum = 1; //PAGINA NUMERO 1 DE LA PAGINACION
  public productsArray: any; //AGREGO EL ARRAY
  productsLength = 0; //CUANTOS PRODUCTOS EXiSTE ENVIADO A LA LENGTH
  constructor(
    @Inject(DOCUMENT) private document: Document, //DOCUMENT
    private apiServi: ProductsService, //API PRODUCTOS
    private carritoItmes: CarritoItemsComponent, //CARRITO ITEMS
    private apiCarrito: CarritoItemsService //APICARRITO
  ) {}

  ngOnInit(): void {
    this.obtenerProductos(); //OBTENER LOS PRODUCTOS
  }
  //OBTENER LOS PRODUCTOS
  obtenerProductos() {
    this.apiServi.getCharacterByPage(this.pageNum, 10).subscribe((res) => {
      this.productsArray = res; //GUARDO EN UN ARRAY LOS PRODUCTOS
      this.apiServi.addProductPagination(res); //AGREGAR AL CARRITO LA PAGINACION
    });
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
  //AGRGAR AL CARRITO
  agregarAlCarrito(id: any) {
    this.carritoItmes.getListItemCarrito(id);
    //PARA SUBIR EL ITEMS DEL CARRITO
    setTimeout(() => {
      this.productsLength = this.apiCarrito.obtenerTamañoDelCarrito();
    }, 100);
  }
}
