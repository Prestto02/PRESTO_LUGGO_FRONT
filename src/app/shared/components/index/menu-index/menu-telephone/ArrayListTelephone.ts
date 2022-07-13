import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

export interface ListTelephone {
  id: number;
  title: string;
  icons: string;
  link: string;
  data_bs_toggle: string;
  data_bs_target: string;
  aria_controls: string;
}

export const ArraylistTelephone: ListTelephone[] = [
  {
    id: 1,
    title: 'Inicio',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-celular-responsive/home.png`,
    link: `${UrlFront.Menu.menu}/${UrlFront.Menu.index}`,
    data_bs_toggle: '',
    data_bs_target: '',
    aria_controls: '',
  },
  {
    id: 2,
    title: 'Perfil',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-celular-responsive/user.png`,
    link: '',
    data_bs_toggle: 'offcanvas',
    data_bs_target: '#offcanvasRightLogin',
    aria_controls: 'offcanvasRightLogin',
  },
  {
    id: 3,
    title: 'Carrito',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-celular-responsive/carrito.png`,
    link: '',
    data_bs_toggle: 'offcanvas',
    data_bs_target: '#offcanvasRightCarrito',
    aria_controls: 'offcanvasRightCarrito',
  },
];
