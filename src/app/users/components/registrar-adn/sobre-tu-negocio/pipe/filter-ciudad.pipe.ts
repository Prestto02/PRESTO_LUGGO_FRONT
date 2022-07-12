import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCiudad',
})
export class FilterCiudadPipe implements PipeTransform {
  transform(ciudadItems: any, searchCiudad: string): any {
    if (!ciudadItems || !searchCiudad) {
      return ciudadItems;
    }
    return ciudadItems.filter(
      (ciudad: any) =>
        ciudad.ciudad.toLowerCase().indexOf(searchCiudad.toLowerCase()) !== -1
    );
  }
}
