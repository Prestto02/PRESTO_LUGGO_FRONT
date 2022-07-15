import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { CarritoItemsService } from '../../index/menu-index/menu/services/carrito-items.service';
import { PagarServices } from '../services/Pagar.service';
import { Message } from './messages/messagesServer';

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
    private apiServi: PagarServices,
    private route: Router,
    private apiServiCarrito: CarritoItemsService
  ) {
    this.urlCheck = this.route.parseUrl(this.route.url);
    this.codigoCheck = this.urlCheck.queryParams['metodo'];
    this.token = this.urlCheck.queryParams['token'];
  }

  ngOnInit(): void {
    //console.log(this.codigoCheck, this.token);
    this.verifyPago();
    this.enviarToken();
  }
  enviarToken() {
    const form = {
      codigoCheck: this.codigoCheck,
      token: this.token,
    };
  }
  verifyPago() {
    //this.decodeBase64();
    if (this.codigoCheck === 'ACEPTADO') {
      this.apiServiCarrito.eliminarTodo();
      localStorage.removeItem('carritoItems');
      this.message = Message.aceptado;
    }
    if (this.codigoCheck === 'RECHAZADO') this.message = Message.rechazado;
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
}
