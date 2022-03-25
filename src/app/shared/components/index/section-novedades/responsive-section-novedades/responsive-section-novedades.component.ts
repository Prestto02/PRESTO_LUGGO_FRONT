import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-section-novedades',
  templateUrl: './responsive-section-novedades.component.html',
  styleUrls: ['./responsive-section-novedades.component.css'],
})
export class ResponsiveSectionNovedadesComponent implements OnInit {
  imagenesApi: any[] = [
    {
      imgNovedades:
        'http://192.168.1.174/img/IM%C3%81GENES/carousel-categorias/Equipos-de-ciclismo.jpg',
      descripcion: 'Audifonos',
    },
    {
      imgNovedades:
        'http://192.168.1.174/img/IM%C3%81GENES/carousel-categorias/Ropa-deportiva.jpg',
      descripcion: 'Muebles de Hogar',
    },
    {
      imgNovedades:
        'http://192.168.1.174/img/IM%C3%81GENES/carousel-categorias/Electronicos.jpg',
      descripcion: 'Equipos de ciclismos',
    },
    {
      imgNovedades:
        'http://192.168.1.174/img/IM%C3%81GENES/carousel-categorias/Abrigos-y-chalecos.jpg',
      descripcion: 'Herramientas',
    },
    {
      imgNovedades:
        'http://192.168.1.174/img/IM%C3%81GENES/carousel-categorias/Calzado-deportivo.jpg',
      descripcion: 'Ropa Deportiva',
    },
    {
      imgNovedades:
        'http://192.168.1.174/img/IM%C3%81GENES/carousel-categorias/Colchones-y-bases-para-cama.jpg',
      descripcion: 'Electrodomesticos',
    },
    {
      imgNovedades:
        'http://192.168.1.174/img/IM%C3%81GENES/carousel-categorias/Juguetes.jpg',
      descripcion: 'Equipos de ciclismo',
    },
    {
      imgNovedades:
        'http://192.168.1.174/img/IM%C3%81GENES/carousel-categorias/Televisores.jpg',
      descripcion: 'Parlantes',
    },
    {
      imgNovedades:
        'http://192.168.1.174/img/IM%C3%81GENES/carousel-categorias/Sofas-de-sala.jpg',
      descripcion: 'Cosmetología',
    },
    {
      imgNovedades:
        'http://192.168.1.174/img/IM%C3%81GENES/carousel-categorias/Muebles-de-hogar.jpg',
      descripcion: 'Maquillaje',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
