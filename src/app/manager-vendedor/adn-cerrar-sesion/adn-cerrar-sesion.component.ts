import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';
import { TokenService } from 'src/app/login/services/token.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-adn-cerrar-sesion',
  templateUrl: './adn-cerrar-sesion.component.html',
  styleUrls: ['./adn-cerrar-sesion.component.css'],
})
export class AdnCerrarSesionComponent implements OnInit {
  constructor(
    private router: Router,
    private tokenUser: TokenService, //TOKEN SERVICES
    private apiLogin: LoginService
  ) {}

  ngOnInit(): void {}

  regresarMenuADn() {
    this.router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}`
    );
  }
  cerrarSesion() {
    this.tokenUser.removeToken();
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
    this.apiLogin.cerrarSesionBackend();
  }
}
