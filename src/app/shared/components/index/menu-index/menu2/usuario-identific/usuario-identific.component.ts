import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';
import { TokenService } from 'src/app/login/services/token.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import {
  arrayListIdentifyUser,
  arrayListNotIdenfityUser,
} from '../LisItemsMenu';

@Component({
  selector: 'app-usuario-identific',
  templateUrl: './usuario-identific.component.html',
  styleUrls: ['./usuario-identific.component.css'],
})
export class UsuarioIdentificComponent implements OnInit {
  @Input('correoUsuario') correoUsuario: any | null = null;
  arrayListIdentify = arrayListIdentifyUser;
  arrayListNotIdentify = arrayListNotIdenfityUser;
  constructor(
    private tokenUser: TokenService, //TOKEN SERVICES
    private router: Router,
    private apiLogin: LoginService
  ) {}

  ngOnInit(): void {}

  //VERIFICO QUE LINK ME LLEGA PARA PROCESARLO
  irLink(link: any) {
    const logout: string = `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`;
    if (link === logout) {
      this.tokenUser.removeToken();
      this.apiLogin.cerrarSesionBackend();
      this.router.navigateByUrl(link);
    }
    this.router.navigateByUrl(link);
  }
}
