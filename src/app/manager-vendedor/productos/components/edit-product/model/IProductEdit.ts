//SECCION 1 DE LA EDICION DEL PRODUCTO
export interface IProductEdit {
  multimedia: img;
  id_product: number;
  sku: string;
  marca: string;
  nombre_articulo: string;
  descripcion_articulo: string;
  ArticuloTieneCategorias: [Categorias];
  etiqueta: [Etiquetas];
  Restricciones: string;
  Disponibilidad: string;
  Garantia: string;
  Tipo_Garantia: string;
}
interface img {
  archivo: string;
}
interface Categorias {
  id_categoria_articulo: number;
}

interface Etiquetas {
  nombre: string;
}
