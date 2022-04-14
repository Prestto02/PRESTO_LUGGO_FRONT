import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlFront } from '../../routes/RoutesFront';

@Component({
  selector: 'app-activar-cuenta',
  templateUrl: './activar-cuenta.component.html',
  styleUrls: ['./activar-cuenta.component.css'],
})
export class ActivarCuentaComponent implements OnInit {
  public emailUser?: any;
  constructor(private route: Router, private _route: ActivatedRoute) {
    this.emailUser = this._route.snapshot.paramMap.get('user'); //OBTENGO EL USUARIO PARA LA ACTIVACION
  }

  ngOnInit(): void {}
  irLogin() {
    this.route.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
