import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-cards-information',
  templateUrl: './section-cards-information.component.html',
  styleUrls: ['./section-cards-information.component.css']
})
export class SectionCardsInformationComponent implements OnInit {
  imgNovedades1 =
    'http://192.168.20.104:9595/img/IM%C3%81GENES/carousel-categorias/Equipos-de-ciclismo.jpg';
  imgNovedades2 =
    'http://192.168.20.104:9595/img/IM%C3%81GENES/carousel-categorias/Ropa-deportiva.jpg';
  imgNovedades3 =
    'http://192.168.20.104:9595/img/IM%C3%81GENES/carousel-categorias/Electronicos.jpg';
  imgNovedades4 =
    'http://192.168.20.104:9595/img/IM%C3%81GENES/carousel-categorias/Abrigos-y-chalecos.jpg';
  imgNovedades5 =
    'http://192.168.20.104:9595/img/IM%C3%81GENES/carousel-categorias/Calzado-deportivo.jpg';
  imgNovedades6 =
    'http://192.168.20.104:9595/img/IM%C3%81GENES/carousel-categorias/Colchones-y-bases-para-cama.jpg';
  imgNovedades7 =
    'http://192.168.20.104:9595/img/IM%C3%81GENES/carousel-categorias/Juguetes.jpg';
  imgNovedades8 =
    'http://192.168.20.104:9595/img/IM%C3%81GENES/carousel-categorias/Televisores.jpg';
  imgNovedades9 =
    'http://192.168.20.104:9595/img/IM%C3%81GENES/carousel-categorias/Sofas-de-sala.jpg';
  imgNovedades10 =
    'http://192.168.20.104:9595/img/IM%C3%81GENES/carousel-categorias/Muebles-de-hogar.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
