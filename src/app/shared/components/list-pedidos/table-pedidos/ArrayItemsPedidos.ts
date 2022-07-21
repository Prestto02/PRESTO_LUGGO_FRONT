export interface TablePedidos {
  id_venta: number;
  fecha_venta: string;
  Valor_Total: number;
  estado: string;
}
export const ArrayItemsPedidos: TablePedidos[] = [
  {
    id_venta: 1,
    fecha_venta: '12/08/2022',
    Valor_Total: 12.92,
    estado: 'Pagado',
  },
  {
    id_venta: 2,
    fecha_venta: '02/09/2022',
    Valor_Total: 102.12,
    estado: 'Pendiente',
  },
  {
    id_venta: 3,
    fecha_venta: '22/11/2022',
    Valor_Total: 121.88,
    estado: 'No aprobado',
  },
  {
    id_venta: 4,
    fecha_venta: '09/04/2022',
    Valor_Total: 100.22,
    estado: 'Aprobado',
  },
];

export interface HeaderTablePedido {
  id_venta: string;
  fecha_venta: string;
  Valor_Total: string;
  estado: string;
  opciones: string;
}

export const HeaderItemsTable: HeaderTablePedido = {
  id_venta: 'Nº Venta',
  fecha_venta: 'Fecha',
  Valor_Total: 'Valor Pagado',
  estado: 'Estado',
  opciones: 'Opciones',
};
