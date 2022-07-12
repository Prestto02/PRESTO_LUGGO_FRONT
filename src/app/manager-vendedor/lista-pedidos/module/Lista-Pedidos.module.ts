import { DetallesPedidosComponent } from '../detalles-pedidos/detalles-pedidos.component';
import { ListaPedidosComponent } from '../lista-pedidos.component';
import { FilterPedidosListaPipe } from '../pipe/filter-pedidos-lista.pipe';

export const ListaPedidosProviders = [
  ListaPedidosComponent,
  DetallesPedidosComponent,
  FilterPedidosListaPipe,
];
