import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { PosicionService } from 'src/app/shared/services/posicion.service';
import { BaseFormLogin } from '../models/BaseFormLogin';
import { LoginService } from '../services/login.service';
import { TokenService } from '../services/token.service';

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
    private apiToken: TokenService,
    private position: PositionUser
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser();
  }
  //SUBMIT LOGIN
  submit() {
    this.errorLogin = false;
    const users = this.formB.getDataFormLogin(
      this.position.latitud,
      this.position.longitud
    );
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
      `${UrlFront.Login.login}/${UrlFront.Login.buscarusuario}`
    );
  }
}
