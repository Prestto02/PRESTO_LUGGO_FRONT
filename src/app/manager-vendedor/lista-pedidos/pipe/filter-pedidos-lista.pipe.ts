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
        pedidos.NumeroOrden.toString() //DIFEENCIAR ENTRE MAYUSCULA Y MINUSCULA LA ORDEN DEL PEDIDO
          .indexOf(search.toLowerCase()) !== -1 ||
        pedidos.Estado.toLowerCase().indexOf(search.toLowerCase()) !== -1 || //ESTADO DE PRODUCTO
        pedidos.Orden.toLowerCase().indexOf(search.toLowerCase()) !== -1 || //QUIEN HIZO LA ORDEN
        pedidos.Fecha.toString().indexOf(search) !== -1 //BUSCAR POR FECHA
    );
    return filterListPedidos;
  }
}
