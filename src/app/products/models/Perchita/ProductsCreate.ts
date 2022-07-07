export interface Product {
  id_nombre_articulo: number;
  descripcion_articulo: string;
  sku: string;
  marca: string;
  Restricciones: string;
  Garantia: string;
  Disponibilidad: string;
  Modelo: string;
  ArticuloTieneCategoria: [ArticuloTieneCategoria];
  etiquetas: [etiquetas];
  DetalleArticulo: [DetalleArticulo];
  Multimedia: multimedia;
  Logistica: Logistica;
  Impuesto_Iva: string; //NO TIENE Y Y SI TIENE
  Impuesto_Ice: string; //NO TIENE Y Y SI TIENE
  Latitud: string;
  Logintud: string;
}

interface ArticuloTieneCategoria {
  idcategoria_articulo: number;
}
interface etiquetas {
  nombre: string;
}
interface multimedia {
  archivo: string;
}

interface DetalleArticulo {
  StockMinimo: number;
  StockItems: number;
  PrecioPorVariacion: string;
  atributes: atributes;
}

//ATRIBUTOS DEL PRODUCTO
interface atributes {
  Estado_Producto: string;
  Color_articulo: Color_articulo;
  Material_Constituido: Material_Constituido;
  Peso: Peso;
  Potencia: Potencia;
  Tamaño_articulo: Tamaño_articulo;
  modelo: string;
  Capacidad: Capacidad;
}

//ATRIBUTOS REQUERIDOS
interface Color_articulo {
  Id_Color: number;
}

interface Material_Constituido {
  nombre_material: string;
}

interface Peso {
  peso: string;
}

interface Potencia {
  Potencia_valor: string;
}

interface Tamaño_articulo {
  Longitud_x: string;
  Longitud_y: string;
  Longitud_z: string;
}

interface Capacidad {
  Cantidad: number;
}

//LOGISTICA DEL PRODUCTO

interface Logistica {
  Gestion_Envio: string; //P PUERTO // A ADN
  precio_envio: string;
  Dimensiones: Tamaño_articulo;
  TiempoDespacho: string;
  Ubicacion: Ubicacion;
}
//UBICACION DEL PRODUCTO
interface Ubicacion {
  DescripcionUbicacion: string;
  LongitudArticulo: string;
  LatitudArticulo: string;
}
