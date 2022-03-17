import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-novedades',
  templateUrl: './section-novedades.component.html',
  styleUrls: ['./section-novedades.component.css'],
})
export class SectionNovedadesComponent implements OnInit {
  imgNovedades1 =
    'http://192.168.1.174/img/carousel-categorias/Equipos-de-ciclismo.jpg';
  imgNovedades2 =
    'http://192.168.1.174/img/carousel-categorias/Ropa-deportiva.jpg';
  imgNovedades3 =
    'http://192.168.1.174/img/carousel-categorias/Electronicos.jpg';
  imgNovedades4 =
    'http://192.168.1.174/img/carousel-categorias/Herramientas.jpg';
  imgNovedades5 = 'http://192.168.1.174/img/carousel-categorias/Audifonos.jpg';
  constructor() {}

  ngOnInit(): void {}
}
