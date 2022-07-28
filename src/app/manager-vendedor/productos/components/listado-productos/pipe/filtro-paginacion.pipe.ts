import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPaginacion',
})
export class FiltroPaginacionPipe implements PipeTransform {
  transform(productos: any, searchProducts: string): any {
    if (searchProducts === '' || !searchProducts) return productos;
    if (!productos) return []; //RETURNO VACIO EL ARREGLO SI NO EXISTE PRODUCTOS
    const filterProducts = productos.filter(
      //BUSCO LOS PRODUCTOS
      (product: any) =>
        product.name
          .toLowerCase() //DIFEENCIAR ENTRE MAYUSCULA Y MINUSCULA EL NOMBRE DEL PRODUCTO
          .indexOf(searchProducts.toLowerCase()) !== -1 ||
        product.codigo.toLowerCase().indexOf(searchProducts.toLowerCase()) !== //CODIGO DE PRODUCTO
          -1 ||
        product.marca.toLowerCase().indexOf(searchProducts.toLowerCase()) !== //MARCA DEL PRODUCTO
          -1 ||
        product.stock.toString().indexOf(searchProducts) !== -1 || //STOCK DEL PRODUCTO
        product.precio.toString().indexOf(searchProducts) !== -1 //STOCK DEL PRODUCTO
    );
    return filterProducts;
  }
}
