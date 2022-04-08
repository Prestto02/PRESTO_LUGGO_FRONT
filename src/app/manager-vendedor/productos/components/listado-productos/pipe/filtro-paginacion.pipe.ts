import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPaginacion',
})
export class FiltroPaginacionPipe implements PipeTransform {
  transform(productos: any, searchProducts: any): any {
    if (!productos) return [];
    const filterProducts = productos.filter(
      (product: any) =>
        product.name
          .toLowerCase()
          .toLowerCase()
          .indexOf(searchProducts.toLowerCase()) !== -1
    );
    return filterProducts;
  }
}
