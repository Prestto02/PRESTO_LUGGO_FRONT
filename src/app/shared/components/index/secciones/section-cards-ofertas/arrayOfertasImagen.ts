import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

export const arrayOfertasImg = [
  {
    id: 1,
    ofertas: 'Ofertas 30%',
    texto: 'TECNOLOGÍA',
    classOfertas: 'card-text text-ofertas text-end',
    classTexto:
      'card-title text-titulo text-end d-xl-block d-md-block d-xxl-block',
    imgRuta: `${RepositorioImg.urlRepositorio}img/banners-section-1/tecnologia.jpg`,
  },
  {
    id: 2,
    ofertas: 'Ofertas 50%',
    texto: 'AUDÍFONOS',
    classOfertas: 'card-text text-ofertas text-white',
    classTexto:
      'card-title text-titulo text-white d-xl-block d-md-block d-xxl-block',
    imgRuta: `${RepositorioImg.urlRepositorio}img/banners-section-1/audifonos.jpg`,
  },
  {
    id: 3,
    ofertas: 'Ofertas 30%',
    texto: 'DEPORTIVA',
    classOfertas:
      'card-title text-titulo text-end text-white d-sm-none d-none d-xl-block d-md-block d-xxl-block',
    classTexto: 'card-text text-ofertas text-white text-end',
    imgRuta: `${RepositorioImg.urlRepositorio}img/banners-section-1/deportiva.jpg`,
  },
  {
    id: 4,
    ofertas: 'Ofertas 30%',
    texto: 'COSMÉTICOS',
    classOfertas:
      'card-title text-titulo d-sm-none d-none d-xl-block d-md-block d-xxl-block',
    classTexto: 'card-title text-titulo  d-xl-block d-md-block d-xxl-block',
    imgRuta: `${RepositorioImg.urlRepositorio}img/banners-section-1/cosmeticos.jpg`,
  },
];
