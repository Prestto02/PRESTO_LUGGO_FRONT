import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

export const ArrayItems = [
  {
    id: 1,
    name: 'Vender con Puertto',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/Group.png`,
    route: `${UrlFront.InformativeAdn.informative}/${UrlFront.InformativeAdn.adn}`,
  },
  {
    id: 2,
    name: 'Pedidos y Devoluciones',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/Parcel.png`,
    route: ``,
  },
  {
    id: 3,
    name: 'Métodos de Pago',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/credit-card.png`,
    route: ``,
  },
  {
    id: 4,
    name: 'Registro e inicio de sesión',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/profile.png`,
    route: ``,
  },
  {
    id: 5,
    name: 'Términos y Condiciones',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/books.png`,
    route: ``,
  },
  {
    id: 6,
    name: 'Políticas de Envíos',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/shipping-truck.png`,
    route: ``,
  },
];
