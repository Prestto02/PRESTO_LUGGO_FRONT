export interface DetallePedidosAdn {
  idPedido?: number;
  order: number;
  total: number;
  fecha: string;
  items: number;
  tipoPago: string;
  datosClientes: DatosCliente;
  datosProductos: Readonly<DatosProductos>;
  subtotal: number;
  iva_total: number;
  delivery: number;
  total_pagar: number;
}
/* CLIENTE MODELS */
interface DatosCliente {
  nombreCompletos: string;
  email: string;
  tipos_Pago?: string;
  direccion: string;
  telefono: string;
  pais?: string;
}

interface DatosProductos {
  idProducto: number;
  nombre: string;
  precio: number;
  items: number;
  sku: string;
  tamano?: string;
  img: string;
}
