import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { arrayTiendas } from './arrayTiendas';

@Component({
  selector: 'app-section-noticias',
  templateUrl: './section-noticias.component.html',
  styleUrls: ['./section-noticias.component.css'],
})
export class SectionNoticiasComponent implements OnInit {
  public urlGoogle = `${UrlApi.ApiUrl}${UrlApi.loginGoogle}`;
  arrayTiendas = arrayTiendas;
  /* CARDS */
  cardIcons1 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/tecnologia.png`;
  cardIcons2 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/linea blanca.png`;
  cardIcons3 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/herramientas.png`;
  cardIconsFacebook = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Facebook - Original.png`;
  cardIconsGoogle = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Google - Original.png`;
  cardIconsMicrosoft = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Microsoft.png`;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irProductos(url: string) {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscar}${url}`
    );
  }
}
