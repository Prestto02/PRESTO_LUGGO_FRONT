import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';
import { TokenService } from 'src/app/login/services/token.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-cliente-cerrar-sesion',
  templateUrl: './cliente-cerrar-sesion.component.html',
  styleUrls: ['./cliente-cerrar-sesion.component.css'],
})
export class ClienteCerrarSesionComponent implements OnInit {
  email: any;
  @Input('label') label: any | null = null;
  constructor(
    private router: Router,
    private tokenUser: TokenService,
    private apiLogin: LoginService
  ) {}

  ngOnInit(): void {
    this.email = this.tokenUser.getTokenEmail();
  }

  regresarMenuADn() {
    this.router.navigateByUrl(
      `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`
    );
  }
  cerrarSesion() {
    this.tokenUser.removeToken();
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
    this.apiLogin.cerrarSesionBackend().subscribe((res)=>{
      console.log(res);
    });
  }
}
