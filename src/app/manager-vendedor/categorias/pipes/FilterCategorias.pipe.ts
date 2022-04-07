import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterCategorias',
})
export class FilterCategorias implements PipeTransform {
  transform(categoriasItems: any, searchCategoria: string): any {
    if (!categoriasItems || !searchCategoria) {
      return categoriasItems;
    }
    return categoriasItems.filter(
      (categoria: any) =>
        categoria.nombre
          .toLowerCase()
          .indexOf(searchCategoria.toLowerCase()) !== -1
    );
  }
}
