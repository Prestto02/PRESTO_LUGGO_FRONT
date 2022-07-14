//SECCION 1 DE LA EDICION DEL PRODUCTO
export interface IProductEdit {
  id_artic: number;
  sku: string;
  marca: string;
  descripcion: string;
  img: string;
  ArticuloTieneCategorias: [Categorias];
  Etiquetas: [Etiquetas];
  Restricciones: string;
  Disponibilidad: string;
  Garantia: string;
  Condiciones_Garantia: String;
}

interface Categorias {
  id_categoria_articulo: number;
}

interface Etiquetas {}
