import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

export interface carouselTelephone {
  id: number;
  img: string;
  link: string;
}

export interface cardTelephone {
  id: number;
  img: string;
  text: string;
}

export const itemCarouse: carouselTelephone[] = [
  {
    id: 1,
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-celular-responsive/b-cocina.png`,
    link: '',
  },
  {
    id: 2,
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-celular-responsive/b-cocina.png`,
    link: '',
  },
  {
    id: 3,
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-celular-responsive/b-cocina.png`,
    link: '',
  },
];

export const itemCards: cardTelephone[] = [
  {
    id: 1,
    img: `https://www.sony.com.ec/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=720`,
    text: 'Audífonos',
  },
  {
    id: 2,
    img: `https://fondosmil.com/fondo/17051.jpg`,
    text: 'Teclado',
  },
  {
    id: 3,
    img: `https://fondosmil.com/fondo/17009.jpg`,
    text: 'Ropa',
  },
  {
    id: 4,
    img: `https://www.tuexperto.com/wp-content/uploads/2022/01/paginas-descargar-fondos-de-pantalla.jpg`,
    text: 'Chompas',
  },
];
