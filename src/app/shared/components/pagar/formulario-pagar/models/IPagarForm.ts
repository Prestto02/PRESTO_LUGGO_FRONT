export interface IFormularioPagar {
  Nombres: string;
  Apellidos: string;
  cliente_phone: string;
  code_phone: string;
  identificacion: string;
  correo: string;
  direccion_entrega: string;
  detalle_Venta: Array<detalle_venta>;
}

export interface detalle_venta {
  cantidad: string;
  Id_detalle_articulo: string;
}
