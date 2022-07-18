//SECCION 1 DE LA EDICION DEL PRODUCTO
export interface IProductEdit {
  multimedia: img;
  id_product: number;
  sku: string;
  marca: string;
  nombre_articulo: string;
  descripcion_articulo: string;
  ArticuloTieneCategorias: ArticuloTieneCategoria;
  etiqueta: etiqueta;
  Restricciones: string;
  Disponibilidad: string;
  Garantia: string;
  Tipo_Garantia: string;
  logistica: logistica;
}

interface logistica {
  gestion_Envio: string;
  precio_envio: number;
}
interface img {
  archivo: string;
}
interface ArticuloTieneCategoria {
  idcategoria_articulo: number;
}

interface etiqueta {
  nombre: string;
}
