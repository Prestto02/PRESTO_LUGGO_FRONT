export interface IFormularioPagar {
  Nombres: string;
  Apellidos: string;
  cliente_phone: string;
  code_phone: string;
  identificacion: string;
  correo: string;
  direccion_entrega: string;
  id_ubicacion: number;
}
export interface IFormularioUbicacion {
  latitud: number;
  longitud: number;
  nombre_ubicacion: string;
  /* DATA */
}
export interface detalle_venta {
  cantidad: string;
  Id_detalle_articulo: string;
}
