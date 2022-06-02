import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-pedidos',
  templateUrl: './detalles-pedidos.component.html',
  styleUrls: ['./detalles-pedidos.component.css'],
})
export class DetallesPedidosComponent implements OnInit {
  arrayDetallePedido: any = [
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
        NombreCompletos: 'Carlos Montufar',
        email: 'montufar@gmail.com',
        Tipos_Pago: 'PAYMENTS',
        Direccion: 'Trinataria mz 200 sl 120',
        Telefono: '0987653211',
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
  pedidosMapeado: any = []; //PARA GUARDAR EL NUEVO ARREGLO SEGUN BUSCADO EN LA LISTA DE PEDIDOS DETALLES
  id: any;
  constructor(private router: ActivatedRoute) {
    this.id = this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.buscarDatos();
  }
  /* //DESTRUIR COMPONENTE
  ngOnDestroy(): void {
    this.pedidosMapeado = [];
  } */
  //BUSCAR LOS DATOS
  buscarDatos() {
    this.id = parseInt(this.id);
    this.pedidosMapeado = this.arrayDetallePedido.find((res: any) => {
      return res.idPedido === this.id;
    });
    /*     this.pedidosMapeado.push(datos); */
    console.log(this.pedidosMapeado);
  }
}
