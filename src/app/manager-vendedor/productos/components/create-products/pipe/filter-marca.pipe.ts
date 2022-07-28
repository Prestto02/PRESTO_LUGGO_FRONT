import { Pipe, PipeTransform } from '@angular/core';
import { MarcaList } from '../models/MarcasLists';

@Pipe({
  name: 'filterMarca',
})
export class FilterMarcaPipe implements PipeTransform {
  transform(marcaItems: MarcaList[], searchMarcas: string): MarcaList[] {
    if (!marcaItems || !searchMarcas) return marcaItems;
    return marcaItems.filter(
      (marcas: MarcaList) =>
        marcas.nombre_marca
          .toLowerCase()
          .indexOf(searchMarcas.toLowerCase()) !== -1
    );
  }
}
