import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
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
    private apiPagar: PagarServices,
    private router: Router
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
    /*  const element = <HTMLElement>document.querySelector('#paymentsCheck'); */
    /* this.arrayProductsList.map((res: any) => {
      this.arrayPagoProducts.push({
        cantidad: res.item,
        id_detalle_articulo: res.id_detalle_articulo,
      });
    }); */
    this.pagarSubmit();
  }
  pagarSubmit() {
    const element = <HTMLElement>document.getElementById('paymentNext');
    const formPayments: any = {
      direccion_entrega: 'PPG',
      metodo_pago: 1,
      detalle_Venta: this.arrayPagoProducts,
    };
    this.apiPagar.postPagoUser(formPayments).subscribe((res: any) => {
      console.log(res.data);
      element.insertAdjacentHTML('beforeend', `${res.data}`);
      /* element.innerHTML = this.htmlInsert; */
    });
  }
}
