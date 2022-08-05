export interface ListBuyUsers {
  id_venta: number;
  total: number;
  total_items: number;
  total_products: number;
  detalle_venta: ReadonlyArray<DetalleVenta>;
}

export interface DetalleVenta {
  id_detalle_venta: number;
  id_vendedor: number;
  img: string;
  nombre_producto: string;
  nombre_tienda: string;
  item: number;
  iva: string;
  valor_envio: number;
  sub_Total_producto: number;
  estado_pedido: string;
}
