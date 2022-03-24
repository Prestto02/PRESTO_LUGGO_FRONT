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
    this.urlCheck = this.route.parseUrl(this.route.url);
    this.codigoCheck = this.urlCheck.queryParams['c'];
  }

  ngOnInit(): void {
    this.enviarCodigo();
  }
  //REVISAR EL CODIGO DE VALIDACIoN Del USUARIO
  enviarCodigo() {
    this.apiCheck.postCheckRegister(this.codigoCheck).subscribe(
      (res) => {
        console.log('success', res);
      },
      (err) => {
        console.log(err);
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
