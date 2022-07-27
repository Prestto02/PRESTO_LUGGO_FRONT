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
export const itemCards: cardTelephone[] = [
  {
    id: 1,
    url: `${RepositorioImg.urlRepositorio}img/IMÁGENES/cards-img-telephone/celebremos-juntos.jpg`,
    text: 'Celebremos juntos',
  },
  {
    id: 2,
    url: `${RepositorioImg.urlRepositorio}img/IMÁGENES/cards-img-telephone/productos-nuevos.jpg`,
    text: 'Productos Nuevos',
  },
  {
    id: 3,
    url: `${RepositorioImg.urlRepositorio}img/IMÁGENES/cards-img-telephone/promos-descuentos.jpg`,
    text: 'Promos y Descuentos',
  },
  {
    id: 4,
    url: `${RepositorioImg.urlRepositorio}img/IMÁGENES/cards-img-telephone/hecho-ecuador.jpg`,
    text: 'Hecho en Ecuador',
  },
];
