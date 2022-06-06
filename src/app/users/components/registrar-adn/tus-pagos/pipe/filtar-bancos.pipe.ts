import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBancos',
})
export class FilterBancosPipe implements PipeTransform {
  transform(bancosItems: any, searchBanco: string): any {
    if (!bancosItems || !searchBanco) {
      return bancosItems;
    }
    return bancosItems.filter(
      (banco: any) =>
        banco.nombre_banco.toLowerCase().indexOf(searchBanco.toLowerCase()) !==
        -1
    );
  }
}
