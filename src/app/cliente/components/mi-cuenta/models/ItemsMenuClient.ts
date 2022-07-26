import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { MenuClient } from './MenuClients.interface';

export const ItemsClientMenu: MenuClient[] = [
  {
    id: 1,
    title: 'Mis Pedidos',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/list-content-adn.png`,
    subtitle: 'Crea tu catálogo de productos o servicios.',
    link: `${UrlFront.listaPedidos.lista}/${UrlFront.listaPedidos.listado}`,
  },
  {
    id: 2,
    title: 'Mis pagos',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/billeteraAdn.png`,
    subtitle: 'Agrega y edita tus métodos de pagos.',
    link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
  },
  {
    id: 3,
    title: 'Mi perfil',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/Portal-Usuario-Comprador/mi-perfil.png`,
    subtitle: 'Actualiza tus datos personales.',
    link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.perfilCliente}`,
  },
  {
    id: 4,
    title: 'Direcciones',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/Portal-Usuario-Comprador/mis-direcciones.png`,
    subtitle: 'Agrega, edita o elimina tus direcciones.',
    link: `${UrlFront.Direcciones.moduloDireccion}/${UrlFront.Direcciones.direcciones}`,
  },
  {
    id: 5,
    title: 'Mis Favoritos',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/Portal-Usuario-Comprador/favoritos.png`,
    subtitle: 'Mira tu lista de deseos.',
    link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
  },
  {
    id: 6,
    title: 'Seguridad',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/Portal-Usuario-Comprador/seguridad.png`,
    subtitle: 'Edita tus datos de acceso a Puertto.',
    link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
  },
];
