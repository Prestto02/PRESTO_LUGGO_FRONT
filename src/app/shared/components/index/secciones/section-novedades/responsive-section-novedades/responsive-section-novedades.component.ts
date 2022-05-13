import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-responsive-section-novedades',
  templateUrl: './responsive-section-novedades.component.html',
  styleUrls: ['./responsive-section-novedades.component.css'],
})
export class ResponsiveSectionNovedadesComponent implements OnInit {
  imagenesApi: any[] = [
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Equipos-de-ciclismo.jpg`,
      descripcion: 'Audifonos',
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Ropa-deportiva.jpg`,
      descripcion: 'Muebles de Hogar',
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Electronicos.jpg`,
      descripcion: 'Equipos de ciclismos',
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Abrigos-y-chalecos.jpg`,
      descripcion: 'Herramientas',
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Calzado-deportivo.jpg`,
      descripcion: 'Ropa Deportiva',
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Colchones-y-bases-para-cama.jpg`,
      descripcion: 'Electrodomesticos',
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Juguetes.jpg`,
      descripcion: 'Equipos de ciclismo',
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Televisores.jpg`,
      descripcion: 'Parlantes',
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Sofas-de-sala.jpg`,
      descripcion: 'Cosmetología',
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Muebles-de-hogar.jpg`,
      descripcion: 'Maquillaje',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
