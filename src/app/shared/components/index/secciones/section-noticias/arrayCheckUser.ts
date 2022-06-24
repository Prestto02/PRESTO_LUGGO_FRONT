import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

export const userCheck = [
  {
    id: 1,
    imgUrl: `${RepositorioImg.urlRepositorio}/img/IMÁGENES/Cards-section-2/users.png`,
    texto: '¿Quieres comprar?',
    url: `${UrlFront.Login.login}/${UrlFront.Login.postRegister}`,
  },
  {
    id: 2,
    imgUrl: `${RepositorioImg.urlRepositorio}/img/IMÁGENES/Cards-section-2/cliente.png`,
    texto: '¿Quieres vender?',
    url: `${UrlFront.Users.users}/${UrlFront.Users.adnRegistrar}`,
  },
];
