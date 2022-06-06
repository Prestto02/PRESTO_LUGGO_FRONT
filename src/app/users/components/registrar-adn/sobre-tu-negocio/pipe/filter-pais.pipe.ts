import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPais',
})
export class FilterPaisPipe implements PipeTransform {
  transform(paisItems: any, searchPais: string): any {
    if (!paisItems || !searchPais) {
      return paisItems;
    }
    return paisItems.filter(
      (pais: any) =>
      pais.pais.toLowerCase().indexOf(searchPais.toLowerCase()) !== -1
    );
  }
}
