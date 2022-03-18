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
  public errorLogin = false;
  public urlapi = UrlApi; //API
  constructor(
    public formB: BaseFormLogin,
    private router: Router,
    private apiLogin: LoginService,
    private apiToken: TokenService
  ) {}
  public longitud: any;
  public latitude: any;
  ngOnInit(): void {}

  submit() {
    const users = this.formB.getDataFormLogin();
    this.apiLogin.postUserLogin(users).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        if (err.error.text) {
          this.apiToken.setTokenUsers(err.error.text);
          this.router.navigateByUrl(
            `${UrlFront.Menu.menu}/${UrlFront.Menu.index}`
          );
        } else {
          this.errorLogin = true;
        }
      }
    );
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
