import { Pipe, PipeTransform } from '@angular/core';
import { TableBuy } from '../ArrayItemsPedidos';

@Pipe({
  name: 'searchBuy',
})
export class SearchBuyPipe implements PipeTransform {
  transform(
    compras: ReadonlyArray<TableBuy>,
    search: string
  ): ReadonlyArray<TableBuy> {
    if (search === '' || !search) return compras;
    if (!compras) return [];
    return compras.filter(
      (res: Readonly<TableBuy>) =>
        res.id_venta.toString().indexOf(search.toString()) !== -1 || //POR ORDEN
        res.estado
          .toString()
          .toLocaleLowerCase()
          .indexOf(search.toLocaleLowerCase()) !== -1 || //BUSCAR POR ESTADO DEL PRODUCTO
        res.fecha_venta.toString().indexOf(search.toString()) !== -1 || //FECHA
        res.valor_Total.toString().indexOf(search.toString()) !== -1 //VALOR TOTAL
    );
  }
}
