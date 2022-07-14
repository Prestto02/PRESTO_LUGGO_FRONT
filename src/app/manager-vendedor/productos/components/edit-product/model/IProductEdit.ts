//SECCION 1 DE LA EDICION DEL PRODUCTO
export interface IProductEdit {
  id_artic: number;
  sku: string;
  marca: string;
  descripcion: string;
  img: string;
  Categorias: [Categorias];
  Etiquetas: [Etiquetas];
  Restricciones: string;
  Disponibilidad: string;
  Garantia: string;
  Condiciones_Garantia: String;
}

interface Categorias {
  id_categoria: number;
  nombre: string;
}

interface Etiquetas {}
