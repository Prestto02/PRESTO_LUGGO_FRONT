import { DetallesPedidosComponent } from '../detalles-pedidos/detalles-pedidos.component';
import { StateBadgeDirective } from '../directive/state-badge.directive';
import { ListaPedidosComponent } from '../lista-pedidos.component';
import { FormSearchProducts } from '../models/FormSearchProducts';
import { FilterPedidosListaPipe } from '../pipe/filter-pedidos-lista.pipe';

export const ListaPedidosDeclarations = [
  ListaPedidosComponent,
  DetallesPedidosComponent,
  FilterPedidosListaPipe,
  StateBadgeDirective,
];

export const ListPedidosProviders = [FormSearchProducts];
