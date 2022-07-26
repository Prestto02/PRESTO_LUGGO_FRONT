import { Pipe, PipeTransform } from '@angular/core';
import { Direcciones } from '../models/ArrayDirecciones';

@Pipe({
  name: 'filterubicacion',
})
export class FilterubicacionPipe implements PipeTransform {
  transform(value: Direcciones[], searchDireccion: string): Direcciones[] {
    if (searchDireccion === '' || searchDireccion.length < 2) return value; //PREGUNTO SI ES VACIO O TIENE MENOS 2 CARACTERES NO HACER NADA
    //BUSCAR POR FILTRO
    const filterDireccion = value.filter(
      (res: Direcciones) =>
        res.nombre.toLowerCase().indexOf(searchDireccion.toLowerCase()) !==
          -1 ||
        res.calle.toLowerCase().indexOf(searchDireccion.toLowerCase()) !== -1
    );
    return filterDireccion;
  }
}
