import { Pipe, PipeTransform } from '@angular/core';
import { ListPedidosAdn } from '../models/ListPedidosAdn';

@Pipe({
  name: 'filterPedidosLista',
})
export class FilterPedidosListaPipe implements PipeTransform {
  transform(
    listOrders: ReadonlyArray<ListPedidosAdn>,
    search: string
  ): ReadonlyArray<ListPedidosAdn> {
    if (search == '' || !search) return listOrders;
    if (!listOrders) return [];
    const filterListPedidos = listOrders.filter(
      (pedidos: ListPedidosAdn) =>
        pedidos.numeroOrden
          .toString() //DIFEENCIAR ENTRE MAYUSCULA Y MINUSCULA LA ORDEN DEL PEDIDO
          .indexOf(search.toLowerCase()) !== -1 ||
        pedidos.estado.toLowerCase().indexOf(search.toLowerCase()) !== -1 || //ESTADO DE PRODUCTO
        pedidos.orden_cliente.toString().indexOf(search.toString()) !== -1 || //QUIEN HIZO LA ORDEN
        pedidos.fecha.toString().indexOf(search.toString()) !== -1 //BUSCAR POR FECHA
    );
    return filterListPedidos;
  }
}
