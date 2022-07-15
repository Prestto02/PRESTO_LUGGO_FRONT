import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { CarritoItemsService } from '../../index/menu-index/menu/services/carrito-items.service';
import { Message } from './messages/messagesServer';
import { VerificarParamsService } from './services/verificar-params.service';

@Component({
  selector: 'app-verificar-payments',
  templateUrl: './verificar-payments.component.html',
  styleUrls: ['./verificar-payments.component.css'],
})
export class VerificarPaymentsComponent implements OnInit {
  urlCheck: any;
  codigoCheck: any;
  token: string = '';
  message: string = '';
  constructor(
    private route: Router,
    private apiServiCarrito: CarritoItemsService,
    private verifyServer: VerificarParamsService
  ) {
    this.urlCheck = this.route.parseUrl(this.route.url);
    this.codigoCheck = this.urlCheck.queryParams['metodo'];
    this.token = this.urlCheck.queryParams['token'];
  }

  ngOnInit(): void {
    this.verifyPago();
    this.enviarToken();
    this.verifyModal();
  }
  enviarToken() {
    this.verifyServer.getParamsVerifyPayments(this.token).subscribe((res) => {
      console.log(res);
    });
  }
  verifyPago() {
    //this.decodeBase64();
    if (this.codigoCheck === 'exitoso') {
      this.apiServiCarrito.eliminarTodo();
      localStorage.removeItem('carritoItems');
      this.message = Message.aceptado;
    }
    if (this.codigoCheck === 'error') this.message = Message.rechazado;
  }
  irAPedidos() {
    this.route.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listaDePedidos}`
    );
  }
  volverInicio() {
    this.route.navigateByUrl(
      `${UrlFront.Pagar.pagar}/${UrlFront.Pagar.processoPagar}`
    );
  }
  verifyModal() {
    const modal = <HTMLElement>document.querySelector('.modal-backdrop');
    modal.style.opacity = '0';
    modal.style.position = 'relative';
    modal.style.top = 'none';
    modal.style.zIndex = 'none';
    modal.style.zIndex = 'none';
    modal.style.width = 'none';
    modal.style.height = 'none';
    modal.style.background = 'none';
  }
}
