import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPedidosLista',
})
export class FilterPedidosListaPipe implements PipeTransform {
  transform(listaPedidos: any, searchPedidos: any): any {
    if (!listaPedidos) return [];
    const filterListPedidos = listaPedidos.filter(
      //BUSCO LOS PRODUCTOS
      (pedidos: any) =>
        pedidos.NumeroOrden.toString() //DIFEENCIAR ENTRE MAYUSCULA Y MINUSCULA EL NOMBRE DEL PEDIDO
          .indexOf(searchPedidos.toLowerCase()) !== -1 ||
        pedidos.Estado.toLowerCase().indexOf(searchPedidos.toLowerCase()) !==
          -1 || //CODIGO DE PRODUCTO
        pedidos.Orden.toLowerCase().indexOf(searchPedidos.toLowerCase()) !==
          -1 || //QUIEN HIZO LA ORDEN
        pedidos.Fecha.toString().indexOf(searchPedidos) !== -1 //BUSCAR POR FECHA
    );
    return filterListPedidos;
  }
}
