import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { UrlFront } from '../../../../../routes/RoutesFront';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  public urlGoogle = `${UrlApi.ApiUrl}${UrlApi.loginGoogle}`;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  //REGRESAR AL LOGIN
  irLogin() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
  //IR A REGISTRARSE
  irRegistrarUser() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.postRegister}`
    );
  }
  registrarAdn() {
    this.router.navigateByUrl(
      `${UrlFront.Users.users}/${UrlFront.Users.adnRegistrar}`
    );
  }
}
