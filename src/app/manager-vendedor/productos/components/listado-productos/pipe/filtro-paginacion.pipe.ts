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
          .toLowerCase() //DIFEENCIAR ENTRE MAYUSCULA Y MINUSCULA EL NOMBRE DEL PRODUCTO
          .indexOf(searchProducts.toLowerCase()) !== -1 ||
        product.codigo.toLowerCase().indexOf(searchProducts.toLowerCase()) !==
          -1 || //CODIGO DE PRODUCTO
        product.nombre_categoria
          .toLowerCase()
          .indexOf(searchProducts.toLowerCase()) !== -1 //CATEGORIA DEL PRODUCTO
    );
    return filterProducts;
  }
}
