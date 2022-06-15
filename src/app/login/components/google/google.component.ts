import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolUserService } from 'src/app/guards/services/rol-user.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css'],
})
export class GoogleComponent implements OnInit {
  urlCheck: any;
  codigoCheck: any;
  decodeBase64: any;
  trasnformJSON: any;

  constructor(
    private router: Router,
    private token: TokenService, //TOKEN USER ID EMAIL
    private rolService: RolUserService //ROL USUARIO SERVICES
  ) {
    this.urlCheck = this.router.parseUrl(this.router.url);
    this.codigoCheck = this.urlCheck.queryParams.Token;
  }

  ngOnInit(): void {
    this.verifyTokenCheck();
  }

  verifyTokenCheck() {
    if (this.codigoCheck) {
      this.decodeBase64 = atob(this.codigoCheck);
      this.trasnformJSON = JSON.parse(this.decodeBase64);
      this.checkTokenSign();
    } else {
      this.router.navigateByUrl(
        `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
      );
    }
  }
  //CHECKTOKENSIGN
  checkTokenSign() {
    this.token.setTokenUsersAuthExtern(this.trasnformJSON);
    this.rolService.setDataRolUser(this.trasnformJSON.Rol);
  }
}
