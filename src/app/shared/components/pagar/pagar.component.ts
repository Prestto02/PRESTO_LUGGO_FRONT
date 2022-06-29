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
  htmlServer: any;
  contador: number = 0;
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
    this.contador++;
    if (this.contador === 1) {
      const element = <HTMLElement>document.querySelector('#modal-body-server');
      const formPayments = this.pagarSubmit(form);
      this.apiPagar.postPagoUser(formPayments).subscribe((res: any) => {
        this.htmlServer = res.data;
        element.insertAdjacentHTML(
          'beforeend',
          `<iframe srcdoc='${res.data}' style="height: 500px;" height='500px' width='100%' id='iframeServer'></iframe>`
        );
        this.estilosIframe();
      });
    }
  }
  estilosIframe() {
    const iframe = <HTMLElement>document.querySelector('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '500px';
  }

  pagarSubmit(form: IFormularioPagar) {
    this.arrayPagoProducts = [];
    this.arrayProductsList.map((res: any) => {
      this.arrayPagoProducts.push({
        cantidad: res.item,
        id_detalle_articulo: res.id_detalle_articulo,
      });
    });
    const formPayments: any = {
      ...form,
      detalle_Venta: this.arrayPagoProducts,
    };
    return formPayments;
  }
}
