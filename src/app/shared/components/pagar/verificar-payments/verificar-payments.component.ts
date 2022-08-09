import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { CarritoItemsService } from '../../index/menu-index/menu/services/carrito-items.service';
import { VerificarParamsService } from './services/verificar-params.service';

@Component({
  selector: 'app-verificar-payments',
  templateUrl: './verificar-payments.component.html',
  styleUrls: ['./verificar-payments.component.css'],
})
export class VerificarPaymentsComponent implements OnInit {
  urlCheck: any;
  codigoCheck: number = 0;
  token: string = '';
  transaccion: string = '';
  message: string = '';
  imgPayment = `${RepositorioImg.urlRepositorio}/img/IMÁGENES/mensaje-payments/pago-en-proceso.png`;
  idUser: any;
  constructor(
    private route: Router,
    private apiServiCarrito: CarritoItemsService,
    private verifyServer: VerificarParamsService,
    private apiToken: TokenService
  ) {
    this.urlCheck = this.route.parseUrl(this.route.url);
    this.codigoCheck = this.urlCheck.queryParams['metodo'];
    this.token = this.urlCheck.queryParams['token'];
    this.idUser = this.apiToken.getTokenId();
  }

  ngOnInit(): void {
    //this.verifyPago();
    this.enviarToken();
    //this.verifyModal();
    this.getMessagePayments();
  }
  //TOKEN SERVER PAYMENTS
  enviarToken() {
    this.verifyServer.getParamsVerifyPayments(this.token).subscribe((res) => {
      if (res.code === 200) {
        this.verifyServer.setMessagePayments(res.mensaje);
        this.transaccion = res.transaccion;
        this.apiServiCarrito.eliminarTodo();
        localStorage.removeItem('carritoItems');
      }
      if (res.code === 400) {
        this.verifyServer.setMessagePayments(res.mensaje);
        this.transaccion = res.transaccion;
      }
    });
  }
  //GET MESSAGE PAYMENTS
  getMessagePayments() {
    this.verifyServer.messageSuccess.subscribe((res) => {
      this.message = res;
    });
  }
  /*   verifyPago() {
    //this.decodeBase64();
    if (this.codigoCheck === 'exitoso') {
      this.apiServiCarrito.eliminarTodo();
      localStorage.removeItem('carritoItems');
      this.message = Message.aceptado;
    }
    if (this.codigoCheck === 'error') this.message = Message.rechazado;
  } */
  irAPedidos() {
    this.route.navigateByUrl(
      `${UrlFront.listaPedidos.lista}/${UrlFront.listaPedidos.listado}/${this.idUser}`
    );
  }
  volverInicio() {
    this.route.navigateByUrl(
      `${UrlFront.Pagar.pagar}/${UrlFront.Pagar.processoPagar}`
    );
  }
  verifyModal() {
    const modal = <HTMLElement>document.querySelector('.modal-backdrop');
    if (modal) {
      modal.style.opacity = '0';
      modal.style.position = 'relative';
      modal.style.top = '0';
      modal.style.zIndex = '0';
      modal.style.width = '0';
      modal.style.height = '0';
      modal.style.background = 'none';
    }
  }
}
