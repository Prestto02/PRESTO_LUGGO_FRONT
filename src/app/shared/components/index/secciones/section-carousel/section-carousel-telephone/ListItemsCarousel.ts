import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

export interface carouselTelephone {
  id: number;
  url: string;
  link: string;
}

export interface cardTelephone {
  id: number;
  url: string;
  text: string;
}

/* export const itemCarouse: carouselTelephone[] = [
  {
    id: 1,
    url: `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-celular-responsive/b-cocina.png`,
    link: '',
  },
  {
    id: 2,
    url: `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-celular-responsive/b-cocina.png`,
    link: '',
  },
  {
    id: 3,
    url: `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-celular-responsive/b-cocina.png`,
    link: '',
  },
]; */

export const itemCards: cardTelephone[] = [
  {
    id: 1,
    url: `https://www.sony.com.ec/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=720`,
    text: 'Audífonos',
  },
  {
    id: 2,
    url: `https://fondosmil.com/fondo/17051.jpg`,
    text: 'Teclado',
  },
  {
    id: 3,
    url: `https://fondosmil.com/fondo/17009.jpg`,
    text: 'Ropa',
  },
  {
    id: 4,
    url: `https://www.tuexperto.com/wp-content/uploads/2022/01/paginas-descargar-fondos-de-pantalla.jpg`,
    text: 'Chompas',
  },
];
