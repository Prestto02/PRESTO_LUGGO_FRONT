export interface DetallePedidosAdn {
  idPedido: number;
  order: number;
  Total: number;
  Fecha: string;
  items: number;
  TipoPago: string;
  DatosClientes: DatosCliente;
  DatosProductos: ReadonlyArray<DatosProductos>;
}
/* CLIENTE MODELS */
interface DatosCliente {
  NombreCompletos: string;
  email: string;
  Tipos_Pago: string;
  Direccion: string;
  Telefono: string;
  Pais: string;
}

interface DatosProductos {
  idProducto: number;
  Nombre: string;
  Precio: number;
  items: number;
  Sku: string;
  Tamano: string;
  img: string;
}
/* DETALLE DE PEDIDOS */
export const ArrayDetallePedidos: ReadonlyArray<DetallePedidosAdn> = [
  {
    idPedido: 1,
    order: 4,
    Total: 122,
    Fecha: '10-02-2022 03:08',
    items: 7,
    TipoPago: 'PAYMENT',
    DatosClientes: {
      NombreCompletos: 'Jhon Montenegro',
      email: 'abc@gmail.com',
      Tipos_Pago: 'PAYMENTS',
      Direccion: 'Ceibos 2 MZ12 SL123',
      Telefono: '0987653211',
      Pais: 'Ecuador',
    },
    DatosProductos: [
      {
        idProducto: 21,
        Nombre: 'Audífonos Sony',
        Precio: 20,
        items: 3,
        Sku: 'XYZ-123',
        Tamano: 'Xl',
        img: 'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/img/IMÁGENES/audifonos_sony.jpeg',
      },
      {
        idProducto: 20,
        Nombre: 'Calculadora Sony',
        Precio: 20,
        items: 4,
        Sku: 'XYW-12',
        Tamano: 'SM',
        img: 'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/img/IMÁGENES/audifonos_sony.jpeg',
      },
    ],
  },
  {
    idPedido: 2,
    order: 4,
    Total: 122,
    Fecha: '10-02-2022 03:08',
    items: 7,
    TipoPago: 'PAYMENT',
    DatosClientes: {
      NombreCompletos: 'Carlos Montenegro',
      email: 'carlos.m@gmail.com',
      Tipos_Pago: 'PAYMENTS',
      Direccion: 'Ceibos 2 MZ12 SL123 ESQUINERO',
      Telefono: '0987653211',
      Pais: 'Ecuador',
    },
    DatosProductos: [
      {
        idProducto: 21,
        Nombre: 'Audífonos Sony',
        Precio: 20,
        items: 8,
        Sku: 'XYZ-123',
        Tamano: 'Xl',
        img: 'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/img/IMÁGENES/audifonos_sony.jpeg',
      },
      {
        idProducto: 20,
        Nombre: 'Calculadora Sony',
        Precio: 20,
        items: 8,
        Sku: 'XYW-12',
        Tamano: 'SM',
        img: 'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/img/IMÁGENES/audifonos_sony.jpeg',
      },
    ],
  },
];
