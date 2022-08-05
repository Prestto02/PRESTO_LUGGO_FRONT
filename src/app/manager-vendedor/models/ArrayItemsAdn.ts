import { MenuClient } from 'src/app/cliente/components/mi-cuenta/models/MenuClients.interface';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

export const ListItemsAdn: ReadonlyArray<MenuClient> = [
  {
    id: 1,
    title: 'Mis Productos',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/list-content-adn.png`,
    subtitle: 'Crea tu catálogo de productos o servicios.',
    link: `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`,
  },
  {
    id: 2,
    title: 'Mis Ventas',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/contenedorCarritoAdn.png`,
    subtitle: 'Revisa el estado de tus pedidos online.',
    link: `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listaDePedidos}`,
  },
/*   {
    id: 3,
    title: 'Pagos',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/billeteraAdn.png`,
    subtitle: 'Revisa el estado de tus pedidos online.',
    link: `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}`,
  }, */
  {
    id: 3,
    title: 'Direcciones',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/Portal-Usuario-Comprador/mis-direcciones.png`,
    subtitle: 'Agrega, edita o elimina tus direcciones.',
    link: `${UrlFront.Direcciones.moduloDireccion}/${UrlFront.Direcciones.direcciones}`,
  },
  {
    id: 4,
    title: 'Mis compras',
    icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/list-content-adn.png`,
    subtitle: 'Verifica el historial de tus compras.',
    link: `${UrlFront.listaPedidos.lista}/${UrlFront.listaPedidos.listado}`,
  },
];
