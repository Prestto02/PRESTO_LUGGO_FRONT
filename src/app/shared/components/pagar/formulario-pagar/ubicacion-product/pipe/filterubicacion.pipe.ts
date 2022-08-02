import { Pipe, PipeTransform } from '@angular/core';
import { Direcciones } from '../../../../../../direcciones/models/Direcciones.models';

@Pipe({
  name: 'filterubicacion',
})
export class FilterubicacionPipe implements PipeTransform {
  transform(value: Direcciones[], searchDireccion: string): Direcciones[] {
    if (searchDireccion === '' || searchDireccion.length < 2) return value; //PREGUNTO SI ES VACIO O TIENE MENOS 2 CARACTERES NO HACER NADA
    //BUSCAR POR FILTRO
    const filterDireccion = value.filter(
      (res: Direcciones) =>
        res.descripcion.toLowerCase().indexOf(searchDireccion.toLowerCase()) !==
          -1 /* ||
        res.direccion?.toLowerCase().indexOf(searchDireccion.toLowerCase()) !==
          -1 */
    );
    return filterDireccion;
  }
}
