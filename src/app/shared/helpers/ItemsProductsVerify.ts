import { Injectable } from '@angular/core';
import { CarritoItemsService } from '../components/index/menu-index/menu/services/carrito-items.service';
@Injectable({
  providedIn: 'root',
})
export class ItemsProductsVerify {
  productsListCars: any = [];
  totalAPagar: any;
  constructor(private apiServi: CarritoItemsService) {
    this.getTotalCars();
  }
  //ELIMINAR PRODUCTO DE LA LISTA DE CARRITO Y ACTUALZAR EL CONTADOR DEL TAMAÑO DEL CARRITO
  removeItemsProducts(id: any) {
    this.apiServi.eliminarItemsCarrito(id);
    this.getTotalCars(); //OBTENER EL NUEVO SUBTOTAL DEL CARRITO
    this.apiServi.obtenerTamañoDelCarrito(); //ACTUALIZAR EL TAMAÑO DEL CARRITO
  }
  //OBTENGO TODOS LOS PRODUCTOS Y LOS GUARDO EN EL ARRAY
  getAllProductsCars() {
    this.apiServi.productCarrito.subscribe((res: any) => {
      this.productsListCars = res;
    });
  }
  //ACTUALIZO EL TOTAL A PAGAR DEL CARRITO
  getTotalCars() {
    this.getAllProductsCars();
    this.totalAPagar = 0;
    this.productsListCars.map((res: any) => {
      const subtotal = res.precio * res.item;
 /*      const iva = subtotal * 1.12;
      const totalEnvio = iva + res.precio_envio; */
      this.totalAPagar = this.totalAPagar + subtotal; //REALIZO LA SUMA SEGUN LOS PRODUCTOS EN EL ARREGLO OBSERVABLE
    });
    this.apiServi.totalAPAgarObservable(this.totalAPagar); //CAMBIO EL ESTADO DEL OBSERVABLE
  }
  //INPUT VERIFY NUMBER
  verifyChangeInputsJSON(e: any, res: any) {
    if (e.target.value <= 0) {
      e.target.value = 1;
    }
    if (e.target.value > res.stock) {
      e.target.value = res.stock;
    }
    if (res) {
      res.item = e.target.value;
      res.subtotal = res.precio * res.item;
    }
    this.getTotalCars();
  }

  //INCREMENT JSON DETAILS PRODUCTS
  incrementItemsJSON(res: any) {
    if (res.item < res.stock) {
      res.item++; //HAGO LA SUMA
      res.subtotal = res.precio * res.item; //MULTIPLICO CON El ITEM Y EL PRECIO
      this.getTotalCars();
    }
  }
  //DESCREMENT JSON DETAILS PRODUCTS
  descrementsItemsJSON(res: any) {
    if (res.item > 1) {
      res.item = res.item - 1;
      res.subtotal = res.precio * res.item;
      this.getTotalCars();
    }
  }
}
