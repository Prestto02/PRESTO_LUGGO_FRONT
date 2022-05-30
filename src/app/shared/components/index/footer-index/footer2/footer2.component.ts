import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css'],
})
export class Footer2Component implements OnInit {
  constructor(private _route: Router) {}

  ngOnInit(): void {}
  //QUIENES SOMOS
  irQuienesSomos() {
    this._route.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Menu.quienesSomos}`
    );
  }
  //IR A REGISTRARSE ADN
  venderPuerto() {
    this._route.navigateByUrl(
      `${UrlFront.Users.users}/${UrlFront.Users.adnRegistrar}`
    );
  }
  //REGISTRAR CLIENTE
  registrarseCliente() {
    this._route.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.postRegister}`
    );
  }
}
