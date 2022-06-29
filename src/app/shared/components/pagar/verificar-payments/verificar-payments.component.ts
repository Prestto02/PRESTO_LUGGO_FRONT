import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
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
  decode64: string = '';
  message: string = '';
  constructor(private apiServi: PagarServices, private route: Router) {
    this.urlCheck = this.route.parseUrl(this.route.url);
    this.codigoCheck = this.urlCheck.queryParams['Verificador'];
  }

  ngOnInit(): void {
    this.verifyPago();
  }

  decodeBase64() {
    this.decode64 = atob(this.codigoCheck);
  }

  verifyPago() {
    this.decodeBase64();
    if (this.decode64 === 'ACEPTADO') this.message = Message.aceptado;
    if (this.decode64 === 'RECHAZADO') this.message = Message.rechazado;
  }
  irAPedidos() {
    this.route.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listaDePedidos}`
    );
  }
  volerInicio() {
    this.route.navigateByUrl(
      `${UrlFront.Pagar.pagar}/${UrlFront.Pagar.processoPagar}`
    );
  }
}
