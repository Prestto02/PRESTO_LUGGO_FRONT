import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsProductsVerify } from 'src/app/shared/helpers/ItemsProductsVerify';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { CarritoItemsService } from '../services/carrito-items.service';

@Component({
  selector: 'app-carrito-items',
  templateUrl: './carrito-items.component.html',
  styleUrls: ['./carrito-items.component.css'],
})
export class CarritoItemsComponent implements OnInit {
  totalAPagar = 0;
  productoItems: any;
  public urlImg = RepositorioImg.urlRepositorio;
  constructor(
    @Inject(DOCUMENT) private document: Document, //DOCUMENT
    private apiServi: CarritoItemsService,
    private router: Router,
    private verifyItem: ItemsProductsVerify
  ) {}

  ngOnInit(): void {
    this.document.documentElement.scrollTop = 0;
    this.getItemCarrito();
  }
  //OBTENER EL ID DEl PRODUCTO
  getListItemCarrito(id: any) {
    this.apiServi.getDataProducts(id).subscribe((res) => {
      this.apiServi.addProductCarrito(res); //GUARDO ESE PRODUCTO EN UN ARREGLO BEHAVIOR
    });
  }
  //OBTENER LOS ITEMS DEL INPUT
  verifyChange(e: any, id: any) {
    const res = this.buscarProductoId(id); //OBTENGO EL ID DEL PRODUCTO
    this.verifyItem.verifyChangeInputs(e, res); //ENVIO EL ITEM PARA SU RESPECTIVO CALCULO
    this.carritoTotal();
  }
  //ME SUSCRIBO PARA GUARDAR LA LISTA DE PRODUCTOS QUE TENGO
  getItemCarrito() {
    this.apiServi.productCarrito.subscribe((res) => {
      //ME SUSCRIBO AL RXJS DEl SERVICIO
      this.productoItems = res;
      //this.totalPago(); //CALCULO EL TOTAL A PAGAR
      this.carritoTotal();
    });
  }
  //CALCULAR EL TOTAL DEl CARRITO CUANDO SE LE CAMBIE EL ITEMS
  carritoTotal() {
    this.totalAPagar = 0;
    this.productoItems.map((res: any) => {
      const subtotal = res.precio * res.item;
      this.totalAPagar = this.totalAPagar + subtotal;
    });
    this.apiServi.totalAPAgarObservable(this.totalAPagar); //CAMBIO EL ESTADO DEL OBSERVABLE
    //ME SUSCRIBO AL NUEVO CAMBIO DEL TOTAL A PAGAR SEGUN CAMBIOS CREADOS EN DISTINTOS COMPONENTES
    this.apiServi.totalAPagar$.subscribe((res) => {
      this.totalAPagar = res;
    });
  }

  //INCREMENTAR ITEMS
  increment(id: any) {
    const res = this.buscarProductoId(id); //BUSCO EL PRODUCTO ID
    this.verifyItem.incrementItems(res); //INCREMENTO EL INPUT
    this.carritoTotal();
  }

  //DISMINUIR ITEMS
  descrement(id: any) {
    const res = this.buscarProductoId(id);
    //SI ES MAYOR A 0 LE RESTO CASO CONTRARIO NO HAGO NADA
    this.verifyItem.descrementsItems(res);
    this.carritoTotal();
  }

  //BUSCAR EL ID DEL PRODUCTO DEL ARREGLO ASIGNADO DEL CARRITO
  buscarProductoId(id: any) {
    return this.productoItems
      .filter((elements: any) => elements.id_artic === id)
      .map((res: any) => {
        return res;
      });
  }
  //ELIMINAR DE LA LISTA DEL CARRITO
  removeItemCarrito(id: any) {
    this.apiServi.eliminarListaDeseos(id);
    this.carritoTotal(); //TOTAL DE PRODUCTOS
  }
  //IR AL CARRITO
  irCarrito() {
    this.router.navigateByUrl(
      `${UrlFront.CarritoList.carrito}/${UrlFront.CarritoList.carritoList}`
    );
  }
}
