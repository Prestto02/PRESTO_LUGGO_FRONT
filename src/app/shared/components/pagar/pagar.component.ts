import { Component, OnInit } from '@angular/core';
import { CarritoItemsService } from '../index/menu-index/menu/services/carrito-items.service';
import { BaseFormPagar } from './formulario-pagar/models/BaseFormPagar';
import { IFormularioPagar } from './formulario-pagar/models/IPagarForm';
import { PagarServices } from './services/Pagar.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css'],
})
export class PagarComponent implements OnInit {
  arrayProductsList: any = [];
  totalAPagar: any = 0;
  arrayPagoProducts: any = [];
  constructor(
    private apiServi: CarritoItemsService,
    public formB: BaseFormPagar,
    private apiPagar: PagarServices
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.sumaTotalYSubtotal();
  }
  //TODOS LOS PRODUCTOS
  getAllProducts() {
    this.apiServi.productCarrito.subscribe((res: any) => {
      this.arrayProductsList = res;
    });
    this.totalAPagarCarrito();
  }
  sumaTotalYSubtotal() {
    this.totalAPagar = 0;
    this.arrayProductsList.map((res: any) => {
      this.totalAPagar = this.totalAPagar + res.subtotal; //REALIZO LA SUMA SEGUN LOS PRODUCTOS EN EL ARREGLO OBSERVABLE
    });
    this.apiServi.totalAPAgarObservable(this.totalAPagar); //CAMBIO EL ESTADO DEL OBSERVABLE
  }
  //ME SUSCRIBO AL TOTAL A PAGAR
  totalAPagarCarrito() {
    this.apiServi.totalAPagar$.subscribe((res: any) => {
      this.totalAPagar = res;
    });
  }

  submitPagar(form: IFormularioPagar) {
    this.arrayProductsList.map((res: any) => {
      this.arrayPagoProducts.push({
        cantidad: res.item,
        id_detalle_articulo: res.id_detalle_articulo,
      });
    });
    const data: any = {
      direccion_entrega: 'PPG',
      metodo_pago: 1,
      detalle_Venta: this.arrayPagoProducts,
    };
    this.apiPagar.postPagoUser(data).subscribe((res: any) => {
      console.log(res);
    });
  }
}
