export interface ListPedidosUsers {
  id_venta: number;
  Total: string;
  detalle_venta: [DetalleVenta];
}

export interface DetalleVenta {
  id_detalle_venta: number;
  id_vendedor: number;
  img: string;
  nombre_producto: string;
  nombre_tienda: string;
  item: number;
  iva: string;
  sub_Total_producto: string;
  estado_pedido: string;
}
