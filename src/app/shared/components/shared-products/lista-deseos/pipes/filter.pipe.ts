import { Pipe, PipeTransform } from '@angular/core';
import { ProductListApi } from '../../models/ProducstList';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  //FILTRO PARA LA LISTA DE DESEOS
  transform(listDeseo: ProductListApi[], search: string): ProductListApi[] {
    if (search === '' || search.length < 2) return listDeseo; //PREGUNTO SI ES VACIO O TIENE MENOS 2 CARACTERES NO HACER NADA
    const resultPost = listDeseo.filter(
      (res: ProductListApi) =>
        res.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    return resultPost;
  }
}
