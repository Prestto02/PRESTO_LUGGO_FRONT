import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { userCheck } from './arrayCheckUser';
import { arrayTiendas } from './arrayTiendas';
import { ModelsCards } from './modelsCards';

@Component({
  selector: 'app-section-noticias',
  templateUrl: './section-noticias.component.html',
  styleUrls: ['./section-noticias.component.css'],
})
export class SectionNoticiasComponent implements OnInit {
  public urlGoogle = `${UrlApi.ApiUrl}${UrlApi.loginGoogle}`;
  arrayTiendas = arrayTiendas;
  userCheck = userCheck;
  registerCheck: boolean = false;

  cards = ModelsCards;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irProductos(url: string) {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}/${url}`
    );
  }
  registerUser() {
    this.registerCheck = !this.registerCheck;
  }
  irALaRuta(url: any) {
    this.router.navigateByUrl(url);
  }
}
