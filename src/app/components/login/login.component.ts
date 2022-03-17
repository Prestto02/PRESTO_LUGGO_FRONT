import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlApi } from '../shared/routes/RoutesApi';
import { UrlFront } from '../shared/routes/RoutesFront';
import { BaseFormLogin } from './models/BaseFormLogin';
import { LoginService } from './services/login.service';
import { TokenService } from './services/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public mensaje: boolean = false;
  public urlapi = UrlApi; //API
  constructor(
    public formB: BaseFormLogin,
    private router: Router,
    private apiLogin: LoginService,
    private apiToken: TokenService,
  ) {}
  public longitud: any;
  public latitude: any;
  ngOnInit(): void {}

  submit() {
    this.router.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
    const users = this.formB.getDataFormLogin();
    console.log(users);
  }
  //IR A REGISTRAR CUENTA
  registraCuenta() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.postRegister}`
    );
  }
  //CAMBIAR CONTRASEÑA
  cambiarContrasena() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.cambiarContrasena}`
    );
  }
}
