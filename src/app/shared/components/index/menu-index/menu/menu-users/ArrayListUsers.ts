import { MenuClient } from 'src/app/cliente/components/mi-cuenta/models/MenuClients.interface';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';


export const ItemsClientMenuOffCanvas: MenuClient[] = [
  {
    id: 1,
    title: 'Mis Pedidos',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/mis-pedidos.png`,
    subtitle: 'Crea tu catálogo de productos o servicios.',
    link: `${UrlFront.listaPedidos.lista}/${UrlFront.listaPedidos.listado}`,
  },
  {
    id: 2,
    title: 'Mis pagos',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/billeteraAdn.png`,
    subtitle: 'Revisa el estado de tus pedidos online.',
    link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
  },
  {
    id: 3,
    title: 'Mi perfil',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/mi-perfil.png`,
    subtitle: 'Revisa el estado de tus pedidos online.',
    link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.perfilCliente}`,
  },
  {
    id: 4,
    title: 'Direcciones',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/mis-direcciones.png`,
    subtitle: 'Crea tu catálogo de productos o servicios.',
    link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
  },
  {
    id: 5,
    title: 'Mi Lista de Deseos',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/mi-lista-deseos.png`,
    subtitle: 'Revisa tus pagos y transferencias online.',
    link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
  },
  {
    id: 6,
    title: 'Seguridad',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/seguridad.png`,
    subtitle: 'Revisa tus pagos y transferencias online.',
    link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
  },
];
