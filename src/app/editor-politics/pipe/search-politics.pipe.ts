import { Pipe, PipeTransform } from '@angular/core';
import { IPolitics } from '../models/IPolitics.models';

@Pipe({
  name: 'searchPolitics',
})
export class SearchPoliticsPipe implements PipeTransform {
  transform(politicsData: Array<IPolitics>, search: string): Array<IPolitics> {
    if (search === '' || !search) return politicsData;

    const filterPolitics = politicsData.filter(
      //BUSCO LOS PRODUCTOS
      (product: IPolitics) =>
        product.DocumentName.toLowerCase() //DIFEENCIAR ENTRE MAYUSCULA Y MINUSCULA EL NOMBRE DEL PRODUCTO
          .indexOf(search.toLowerCase()) !== -1 ||
        product.DocumentVS.toLowerCase().indexOf(search.toLowerCase()) !== //CODIGO DE PRODUCTO
          -1
    );
    return filterPolitics;
  }
}
