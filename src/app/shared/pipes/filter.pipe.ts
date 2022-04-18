import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  //FILTRO PARA LA LISTA DE DESEOS
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value; //PREGUNTO SI ES VACIO O TIENE MENOS 2 CARACTERES NO HACER NADA
    const resultPost = [];
    for (const post of value) {
      //RECORRO EL ARRAY Y BUSCO
      if (post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPost.push(post);
      }
    }
    return resultPost;
  }
}
