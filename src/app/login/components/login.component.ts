import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolUserService } from 'src/app/guards/services/rol-user.service';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
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
  load = false;
  public urlapi = UrlApi; //API
  public rutaRegistrar = `${UrlFront.Login.login}/${UrlFront.Login.postRegister}`;
  constructor(
    public formB: BaseFormLogin, //fORM REACTIVE
    private router: Router, //ROUTES
    private apiLogin: LoginService, //SERVICELOGIN
    private tokenUser: TokenService, //TOKEN SERVICES
    private position: PositionUser, //POSITION USER
    private rolService: RolUserService //ROL USUARIO SERVICES
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser(); //OBTENGO LA POSICION DEL USUARIO
  }
  //SUBMIT LOGIN
  submit() {
    this.errorLogin = false; //SETEO EN FALSO
    this.load = false;
    const users = this.formB.getFormLogin(
      this.position.latitud,
      this.position.longitud
    ); //ENVIO LOS DATOS PARA FORMATEAR A UN JSON ESTANDAR
    this.apiLogin.postUserLogin(users).subscribe((res) => {
      this.load = true;
      this.tokenUser.setTokenUsers(res); //SET TOKEN USUARIO
      this.rolService.setDataRolUser(res.rol); //SET ROL USUARIO
    });
  }

  //CAMBIAR CONTRASEÑA
  cambiarContrasena() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.buscarusuario}`
    );
  }
}
