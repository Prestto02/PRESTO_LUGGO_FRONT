export interface TableBuy {
  id_venta: number;
  fecha_venta: string;
  valor_Total: number;
  estado: string;
}

export interface HeaderTablePedido {
  id_venta: string;
  fecha_venta: string;
  Valor_Total: string;
  estado: string;
  opciones: string;
}

export const HeaderItemsTable: Readonly<HeaderTablePedido> = {
  id_venta: 'Nº Orden',
  fecha_venta: 'Fecha',
  Valor_Total: 'Valor Pagado',
  estado: 'Estado de Orden',
  opciones: 'Opciones',
};
