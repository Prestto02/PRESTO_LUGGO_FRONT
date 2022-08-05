import { Pipe, PipeTransform } from '@angular/core';
import { TablePedidos } from '../ArrayItemsPedidos';

@Pipe({
  name: 'searchBuy',
})
export class SearchBuyPipe implements PipeTransform {
  transform(
    compras: ReadonlyArray<TablePedidos>,
    search: string
  ): ReadonlyArray<TablePedidos> {
    if (search === '' || !search) return compras;
    if (!compras) return [];
    return compras.filter(
      (res: Readonly<TablePedidos>) =>
        res.estado
          .toString()
          .toLocaleLowerCase()
          .indexOf(search.toLocaleLowerCase()) !== -1 || //BUSCAR POR ESTADO DEL PRODUCTO
        res.fecha_venta.toString().indexOf(search.toString()) !== -1 || //FECHA
        res.Valor_Total.toString().indexOf(search.toString()) !== -1 //VALOR TOTAL
    );
  }
}
