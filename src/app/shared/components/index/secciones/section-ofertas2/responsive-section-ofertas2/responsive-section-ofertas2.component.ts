import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-responsive-section-ofertas2',
  templateUrl: './responsive-section-ofertas2.component.html',
  styleUrls: ['./responsive-section-ofertas2.component.css'],
})
export class ResponsiveSectionOfertas2Component implements OnInit {
  imagenesApi: any[] = [
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Equipos-de-ciclismo.jpg`,
      descripcion: 'Esmeril de Mesa',
      precio: '89,99',
      descuento: 40,
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Ropa-deportiva.jpg`,
      descripcion: 'Computadoras',
      precio: '399,99',
      descuento: 30,
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Electronicos.jpg`,
      descripcion: 'Bicicletas de carreras',
      precio: '100,99',
      descuento: 50,
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Abrigos-y-chalecos.jpg`,
      descripcion: 'Televisor Rivera 55"',
      precio: '500,99',
      descuento: 60,
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Calzado-deportivo.jpg`,
      descripcion: 'Licuadora Oster',
      precio: '89,99',
      descuento: 25,
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Colchones-y-bases-para-cama.jpg`,
      descripcion: 'Maquillaje',
      precio: '45,99',
      descuento: 10,
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Juguetes.jpg`,
      descripcion: 'Herramientas',
      precio: '59,99',
      descuento: 40,
    },
    {
      imgNovedades: `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/carousel-categorias/Televisores.jpg`,
      descripcion: 'Celulares',
      precio: '99,99',
      descuento: 15,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
