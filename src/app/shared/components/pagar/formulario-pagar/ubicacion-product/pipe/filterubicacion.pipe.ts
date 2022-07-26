import { Pipe, PipeTransform } from '@angular/core';
import { Direcciones } from '../models/ArrayDirecciones';

@Pipe({
  name: 'filterubicacion',
})
export class FilterubicacionPipe implements PipeTransform {
  transform(value: Direcciones[], arg: any): any {
    if (arg === '' || arg.length < 2) return value; //PREGUNTO SI ES VACIO O TIENE MENOS 2 CARACTERES NO HACER NADA
    const resultPost: any = [];
    value.map((res: Direcciones) => {
      //RECORRO EL ARRAY Y BUSCO
      if (res.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPost.push(res);
      }
    });
    return resultPost;
  }
}
