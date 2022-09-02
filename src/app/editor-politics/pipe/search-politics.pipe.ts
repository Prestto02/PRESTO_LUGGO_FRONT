import { Pipe, PipeTransform } from '@angular/core';
import { IPoliticsData } from '../models/IPolitics.models';

@Pipe({
  name: 'searchPolitics',
})
export class SearchPoliticsPipe implements PipeTransform {
  transform(
    politicsData: Array<IPoliticsData>,
    search: any
  ): Array<IPoliticsData> {
    if (search === '' || !search) return politicsData;
    if (politicsData.length < 0) return politicsData;
    const filterPolitics = politicsData.filter(
      //BUSCO LOS PRODUCTOS
      (product: IPoliticsData) =>
        product.documentName
          .toLowerCase() //DIFEENCIAR ENTRE MAYUSCULA Y MINUSCULA EL NOMBRE DEL PRODUCTO
          .indexOf(search.toLowerCase()) !== -1 ||
        product.documentVS.toLowerCase().indexOf(search.toLowerCase()) !== //CODIGO DE PRODUCTO
          -1
    );
    return filterPolitics;
  }
}
