import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { CarritoItemsComponent } from '../index/menu/carrito-items/carrito-items.component';

@Component({
  selector: 'app-shared-products',
  templateUrl: './shared-products.component.html',
  styleUrls: ['./shared-products.component.css'],
})
export class SharedProductsComponent implements OnInit {
  showButton = false;
  private scrollHeigth = 100;
  private pageNum = 1;
  public productsArray: any;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private apiServi: ProductsService,
    private carritoItmes: CarritoItemsComponent
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
    // this.obtenerDataApi();
  }
  //OBTENER LOS PRODUCTOS
  obtenerProductos() {
    this.apiServi.getCharacterByPage(this.pageNum, 10).subscribe((res) => {
      this.productsArray = res.data;
      this.apiServi.addProductPagination(res.data);
    });
  }
  //HOSTLISTENER SCROLL
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffset = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffset || scrollTop) > this.scrollHeigth;
  }
  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  //ON SCROLL DOWn
  onScrollDown(): void {
    this.pageNum++;
    this.apiServi.getCharacterByPage(this.pageNum, 10).subscribe((res) => {
      this.apiServi.addProductPagination(res.data);
      this.apiServi.productDataPagination.subscribe((res) => {
        this.productsArray = res;
      });
    });
  }
  //AGRGAR AL CARRITO
  agregarAlCarrito(id: any) {
    this.carritoItmes.getListItemCarrito(id);
  }
}
