import { Pipe, PipeTransform } from '@angular/core';
import { ListCategoryApi } from '../models/ListCategory';

@Pipe({
  name: 'FilterCategorias',
})
export class FilterCategorias implements PipeTransform {
  transform(
    listCategory: ListCategoryApi[],
    search: string
  ): ListCategoryApi[] {
    if (!listCategory) return [];
    const filterCategory = listCategory.filter(
      (categoria: ListCategoryApi) =>
        categoria.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    return filterCategory;
  }
}
