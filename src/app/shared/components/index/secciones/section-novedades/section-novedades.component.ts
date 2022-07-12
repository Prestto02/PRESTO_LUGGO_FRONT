import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-section-novedades',
  templateUrl: './section-novedades.component.html',
  styleUrls: ['./section-novedades.component.css'],
})
export class SectionNovedadesComponent implements OnInit {
  imgNovedades1 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Equipos-de-ciclismo.jpg`;
  imgNovedades2 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Ropa-deportiva.jpg`;
  imgNovedades3 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Electronicos.jpg`;
  imgNovedades4 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Abrigos-y-chalecos.jpg`;
  imgNovedades5 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Calzado-deportivo.jpg`;
  imgNovedades6 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Colchones-y-bases-para-cama.jpg`;
  imgNovedades7 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Juguetes.jpg`;
  imgNovedades8 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Televisores.jpg`;
  imgNovedades9 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Sofas-de-sala.jpg`;
  imgNovedades10 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Muebles-de-hogar.jpg`;
  constructor() {}

  ngOnInit(): void {}
}
