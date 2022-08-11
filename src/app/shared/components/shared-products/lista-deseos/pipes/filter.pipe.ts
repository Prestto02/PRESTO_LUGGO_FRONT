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
      (res: ProductListApi) => this.getDataTransform(res.name, search) !== -1
    );
    return resultPost;
  }
  getDataTransform(data: string, search: string): number {
    return data.toLowerCase().indexOf(search.toLowerCase());
  }
}
