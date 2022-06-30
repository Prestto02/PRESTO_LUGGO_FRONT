import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositorioImg } from '../../helpers/RepositorioImg';
import { UrlFront } from '../../routes/RoutesFront';

@Component({
  selector: 'app-not-fund404',
  templateUrl: './not-fund404.component.html',
  styleUrls: ['./not-fund404.component.css'],
})
export class NotFund404Component implements OnInit {
  imgNotFound = `${RepositorioImg.urlRepositorio}img/IMÁGENES/404/notFound.png`;
  @Input('mensaje') mensaje: string | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  //REGRESAR AL INDEX
  regresar() {
    this.router.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
  }
}
