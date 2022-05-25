import { Pipe, PipeTransform } from '@angular/core';
import { BaseFormCategorias } from '../models/categorias.models';

@Pipe({
  name: 'FilterCategorias',
})
export class FilterCategorias implements PipeTransform {
  constructor(public formB: BaseFormCategorias) {}
  transform(categoriasItems: any, searchCategoria: string): any {
    if (!categoriasItems || !searchCategoria) {
      return categoriasItems;
    }
    return categoriasItems.filter((categoria: any) => {
      return categoria.name
        .toLowerCase()
        .includes(searchCategoria.toLowerCase());
    });
  }
}
