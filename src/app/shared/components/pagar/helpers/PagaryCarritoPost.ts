import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/login/services/token.service';
import { AddCarsOrListDesire } from 'src/app/shared/helpers/AddCarsOrListDesire';
import { IFormularioPagar } from '../formulario-pagar/models/IPagarForm';

@Injectable({ providedIn: 'root' })
export class PagarOCarritoPost {
  arrayPagoProducts: any = [];
  idUser: any;
  constructor(
    private addCars: AddCarsOrListDesire,
    private token: TokenService
  ) {
    this.idUser = this.token.getTokenId();
  }

  //ESTILOS IFRAME
  estilosIframe() {
    const iframe = <HTMLElement>document.querySelector('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '480px';
  }

  //INJECT IFRAME DOM
  injectDomIFrame(res: any) {
    const element = <HTMLElement>document.querySelector('#modal-body-server');
    element.insertAdjacentHTML(
      'beforeend',
      `<iframe srcdoc="${res.data}" style="height: 500px;" height='500px' width='100%' id='iframeServer'></iframe>`
    );
    this.estilosIframe();
  }
  //PAGAR SUBMIT
  pagarSubmit(form: IFormularioPagar, arrayProductsList: any) {
    this.arrayPagoProducts = [];
    arrayProductsList.map((res: any) => {
      this.arrayPagoProducts.push({
        cantidad: res.item,
        id_detalle_articulo: res.id_detalle_articulo,
      });
      this.postCarritoItems(res); //POST CARRITO ITEMS
    });
    const formPayments: any = {
      ...form,
      detalle_Venta: this.arrayPagoProducts,
    };
    return formPayments;
  }
  //CARRITO ITEMS POST
  postCarritoItems(res: any) {
    this.addCars.addDetalleCarrito(res);
    this.addCars.postCarritoItems(this.idUser, false);
  }
}
