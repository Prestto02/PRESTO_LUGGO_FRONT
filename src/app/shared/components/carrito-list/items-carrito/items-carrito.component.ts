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
  totalItems: number = 0;
  constructor(
    private apiServi: CarritoItemsService,
    private verifyInput: ItemsProductsVerify,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSubtotalCarrito();
    this.totalAPagarCarrito();
    this.getCarritoLength();
  }
  //OBTENGO EL SUBTOTAL DEL CARRITO
  getSubtotalCarrito() {
    this.totalAPagar = 0;
    this.carritoProductList.map((res: any) => {
      this.totalAPagar = this.totalAPagar + res.subtotal; //REALIZO LA SUMA SEGUN LOS PRODUCTOS EN EL ARREGLO OBSERVABLE
    });
    this.apiServi.totalAPAgarObservable(this.totalAPagar); //CAMBIO EL ESTADO DEL OBSERVABLE
  }
  //ACTUALIZAR EL TAMAÑO DEL CARRITO
  getCarritoLength() {
    this.apiServi.obtenerTamañoDelCarrito();
  }
  //ELIMINAR ITEMS DEL CARRITO
  removeItemsCarrito(id: any) {
    this.apiServi.eliminarItemsCarrito(id);
    this.getSubtotalCarrito(); //OBTENER EL NUEVO SUBTOTAL DEL CARRITO
    this.getCarritoLength(); // ACTUALIZAR EL TAMAÑO DEL CARRITO
  }
  //ME SUSCRIBO AL TOTAL A PAGAR
  totalAPagarCarrito() {
    this.apiServi.totalAPagar$.subscribe((res: any) => {
      this.totalAPagar = res;
    });
  }
  //VERIFYCHANGE USER
  verifyChange(e: any, id: any) {
    const res = this.buscarProductoId(id); //OBTENGO EL ID DEL PRODUCTO
    this.verifyInput.verifyChangeInputs(e, res); //VERIFICO EL INPUTS CHANGE
    this.getSubtotalCarrito();
  }
  //DESCREMENT INPUT TARGET ITEMS
  descrement(id: any) {
    const res = this.buscarProductoId(id);
    this.verifyInput.descrementsItems(res); //ENVIO A VERIFICAR EL DESREMENTO
    this.getSubtotalCarrito();
  }
  //INCREMENTAR ITEMS
  increment(id: any) {
    const res = this.buscarProductoId(id); //BUSCO EL PRODUCTO ID
    this.verifyInput.incrementItems(res); //INCREMENT ITEMS
    this.getSubtotalCarrito();
  }
  //BUSCAR EL ID DEL PRODUCTO DEL ARREGLO ASIGNADO DEL CARRITO
  buscarProductoId(id: any) {
    return this.carritoProductList
      .filter((elements: any) => elements.id_artic === id)
      .map((res: any) => {
        return res;
      });
  }

  iraDetalles(idarticulo: any) {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Productos.detalleGetProducto}${idarticulo}`
    );
  }
}
