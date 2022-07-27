export interface ListPedidosAdn {
  id: number;
  NumeroOrden: number;
  Estado: string;
  Total: number;
  Orden: string;
  Fecha: string;
  items: number;
}

export const ArrayListPedidos: ListPedidosAdn[] = [
  {
    id: 1,
    NumeroOrden: 4,
    Estado: 'En proceso',
    Total: 122,
    Fecha: '10-02-2022 03:08',
    Orden: 'Jhon Montenegro',
    items: 4,
  },
  {
    id: 2,
    NumeroOrden: 5,
    Estado: 'Terminado',
    Total: 125.0,
    Fecha: '11-06-2022 08:15',
    Orden: 'Carlos Montúfar',
    items: 120,
  },
  {
    id: 3,
    NumeroOrden: 6,
    Estado: 'En proceso',
    Total: 323.0,
    Fecha: '10-10-2022 10:30',
    Orden: 'Juan Pincuya',
    items: 12,
  },
  {
    id: 4,
    NumeroOrden: 7,
    Estado: 'En espera',
    Total: 695.0,
    Orden: 'Karla Montenegro',
    Fecha: '10-09-2022 14:21',
    items: 8,
  },
  {
    id: 5,
    NumeroOrden: 8,
    Estado: 'Terminado',
    Total: 854.0,
    Fecha: '11-07-2022 17:00',
    Orden: 'Maria Muriela',
    items: 7,
  },
  {
    id: 6,
    NumeroOrden: 9,
    Estado: 'En proceso',
    Total: 765.0,
    Fecha: '10-02-2022 22:43',
    Orden: 'Martha Muñoz',
    items: 10,
  },
  {
    id: 7,
    NumeroOrden: 10,
    Estado: 'En espera',
    Total: 1278.0,
    Fecha: '10-02-2022 11:19',
    Orden: 'Maria del Carmen Soledispa Quimis',
    items: 4,
  },
  {
    id: 8,
    NumeroOrden: 11,
    Estado: 'Terminado',
    Total: 521.0,
    Orden: 'Pablo Gonzala',
    Fecha: '10-12-2022 13:09',
    items: 3,
  },
  {
    id: 9,
    NumeroOrden: 12,
    Estado: 'En proceso',
    Total: 12.0,
    Orden: 'Jhon Monterrey',
    Fecha: '10-02-2022 19:44',
    items: 1,
  },
  {
    id: 10,
    NumeroOrden: 13,
    Estado: 'En espera',
    Total: 52.0,
    Orden: 'Mario Pillosalas',
    Fecha: '04-25-2022 06:06',
    items: 5,
  },
  {
    id: 10,
    NumeroOrden: 13,
    Estado: 'No procesada',
    Total: 522.0,
    Orden: 'Pedro Lupa',
    Fecha: '08-15-2022 18:06',
    items: 5,
  },
];
