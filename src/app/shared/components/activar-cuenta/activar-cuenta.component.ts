import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositorioImg } from '../../helpers/RepositorioImg';
import { UrlFront } from '../../routes/RoutesFront';
import { ActivarCuentaService } from './service/activar-cuenta.service';

@Component({
  selector: 'app-activar-cuenta',
  templateUrl: './activar-cuenta.component.html',
  styleUrls: ['./activar-cuenta.component.css'],
})
export class ActivarCuentaComponent implements OnInit {
  public emailUser?: any;
  imgRepositorio: string = `${RepositorioImg.urlRepositorio}img/IMÁGENES/activar-cuenta/activar-cuenta.png`;
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
