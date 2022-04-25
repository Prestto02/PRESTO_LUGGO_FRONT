import { Component, OnInit } from '@angular/core';
import { CarritoItemsService } from '../services/carrito-items.service';

@Component({
  selector: 'app-carrito-items',
  templateUrl: './carrito-items.component.html',
  styleUrls: ['./carrito-items.component.css'],
})
export class CarritoItemsComponent implements OnInit {
  totalAPagar = 0;
  productoItems: any;
  constructor(private apiServi: CarritoItemsService) {}

  ngOnInit(): void {
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
    if (e.target.value <= 0) {
      e.target.value = 1;
    }
    const res = this.buscarProductoId(id); //OBTENGO EL ID DEL PRODUCTO
    res[0].item = e.target.value;
    res[0].subtotal = res[0].precio * res[0].item; //MULTIPLICO CON El ITEM Y EL PRECIO
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
  }

  //INCREMENTAR ITEMS
  increment(id: any) {
    const res = this.buscarProductoId(id); //BUSCO EL PRODUCTO ID
    res[0].item++; //HAGO LA SUMA
    res[0].subtotal = res[0].precio * res[0].item; //MULTIPLICO CON El ITEM Y EL PRECIO
    this.carritoTotal();
  }
  //DISMINUIR ITEMS
  descrement(id: any) {
    const res = this.buscarProductoId(id);
    //SI ES MAYOR A 0 LE RESTO CASO CONTRARIO NO HAGO NADA
    if (res[0].item > 1) {
      res[0].item = res[0].item - 1;
      res[0].subtotal = res[0].precio * res[0].item;
      this.carritoTotal();
    }
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
}
