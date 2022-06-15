import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-usuario-identific',
  templateUrl: './usuario-identific.component.html',
  styleUrls: ['./usuario-identific.component.css'],
})
export class UsuarioIdentificComponent implements OnInit {
  @Input('correoUsuario') correoUsuario: any | null = null;
  constructor(
    private tokenUser: TokenService, //TOKEN SERVICES
    private router: Router
  ) {}

  ngOnInit(): void {}

  //CERRAR SESION
  logoutUser() {
    this.tokenUser.removeToken();
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
  //INCIAR SESION
  inciarSesion() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
  //IR A REGISTRARSE ADN
  venderPuerto() {
    this.router.navigateByUrl(
      `${UrlFront.Users.users}/${UrlFront.Users.adnRegistrar}`
    );
  }
  //IR A REGISTRARME
  registrarme() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.postRegister}`
    ); //REGISTRAR AL USUARIO
  }
}
