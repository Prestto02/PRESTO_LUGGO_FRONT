import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsProductsVerify } from 'src/app/shared/helpers/ItemsProductsVerify';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { CarritoItemsService } from '../../index/menu-index/menu/services/carrito-items.service';

@Component({
  selector: 'app-items-carrito',
  templateUrl: './items-carrito.component.html',
  styleUrls: ['./items-carrito.component.css'],
})
export class ItemsCarritoComponent implements OnInit {
  @Input('carritoProductList') carritoProductList: any | null = null;
  imgIcons = `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-iconos/shop.png`;
  public urlImg = RepositorioImg.urlRepositorio;
  totalAPagar: any = 0;
  constructor(
    private apiServi: CarritoItemsService,
    private router: Router,
    private productsItems: ItemsProductsVerify
  ) {}

  ngOnInit(): void {
    this.totalAPagarCarrito();
  }
  //ELIMINAR ITEMS DEL CARRITO
  removeItemsCarrito(id: any) {
    this.productsItems.removeItemsProducts(id);
  }
  //ME SUSCRIBO AL TOTAL A PAGAR
  totalAPagarCarrito() {
    this.apiServi.totalAPagar$.subscribe((res: any) => {
      this.totalAPagar = res;
    });
  }

  iraDetalles(idarticulo: any) {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Productos.detalleGetProducto}${idarticulo}`
    );
  }
}
