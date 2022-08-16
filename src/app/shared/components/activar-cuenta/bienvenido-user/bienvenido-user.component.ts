import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ActivarCuentaService } from '../service/activar-cuenta.service';

@Component({
  selector: 'app-bienvenido-user',
  templateUrl: './bienvenido-user.component.html',
  styleUrls: ['./bienvenido-user.component.css'],
})
export class BienvenidoUserComponent implements OnInit {
  public urlCheck: any;
  public codigoCheck: any;
  constructor(private route: Router, private apiCheck: ActivarCuentaService) {
    this.urlCheck = this.route.parseUrl(this.route.url); //OBTENGO LO QUE VIENE DE LA URL
    this.codigoCheck = this.urlCheck.queryParams['c']; //PARSEO LA C PARA OBTENER EL CODIGO
  }

  ngOnInit(): void {
    this.enviarCodigo(); //ENVIO EL CODIGO AL SERVIDOR PARA VERIFICAR
  }
  //REVISAR EL CODIGO DE VALIDACIoN Del USUARIO
  enviarCodigo() {
    const codigo = {
      codigo_activacion: this.codigoCheck,
    }; //HAGO EL JSON PARA EL CODIGO
    this.apiCheck.postCheckRegister(codigo).subscribe(
      (res) => {
        this.route.navigateByUrl(
          `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
        );
      },
      (err) => {
        this.route.navigateByUrl(
          `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
        );
      }
    );
  }
  //IR AL LOGIn
  irLogin() {
    this.route.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
