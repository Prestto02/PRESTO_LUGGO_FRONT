import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPaginacion',
})
export class FiltroPaginacionPipe implements PipeTransform {
  transform(productos: any, searchProducts: any): any {
    if (!productos) return []; //RETURNO VACIO EL ARREGLO SI NO EXISTE PRODUCTOS
    const filterProducts = productos.filter(
      //BUSCO LOS PRODUCTOS
      (product: any) =>
        product.name
          .toLowerCase() //DIFEENCIAR ENTRE MAYUSCULA Y MINUSCULA
          .indexOf(searchProducts.toLowerCase()) !== -1
    );
    return filterProducts;
  }
}
