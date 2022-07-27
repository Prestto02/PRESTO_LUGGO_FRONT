import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMarca',
})
export class FilterMarcaPipe implements PipeTransform {
  transform(marcaItems: any, searchMarcas: string): any {
    if (!marcaItems || !searchMarcas) return marcaItems;
    return marcaItems.filter(
      (marcas: any) =>
        marcas.nombre_marca
          .toLowerCase()
          .indexOf(searchMarcas.toLowerCase()) !== -1
    );
  }
}
