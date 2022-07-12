import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
})
export class ListaPedidosComponent implements OnInit {
  public ruta: any = `${UrlFront.Manager.vendedor}`;

  arrayListaPedidos: any = [
    {
      id: 1,
      NumeroOrden: 4,
      Estado: 'En proceso',
      Total: 122,
      Fecha: '10-02-2022 03:08',
      Orden: 'Jhon Montenegro',
      items: 4,
      colorEstado: 'bg-primary',
    },
    {
      id: 2,
      NumeroOrden: 5,
      Estado: 'Terminado',
      Total: 125.0,
      Fecha: '11-06-2022 08:15',
      Orden: 'Carlos Montúfar',
      items: 120,
      colorEstado: 'bg-success',
    },
    {
      id: 3,
      NumeroOrden: 6,
      Estado: 'En proceso',
      Total: 323.0,
      Fecha: '10-10-2022 10:30',
      Orden: 'Juan Pincuya',
      items: 12,
      colorEstado: 'bg-primary',
    },
    {
      id: 4,
      NumeroOrden: 7,
      Estado: 'En espera',
      Total: 695.0,
      Orden: 'Karla Montenegro',
      Fecha: '10-09-2022 14:21',
      items: 8,
      colorEstado: 'bg-warning',
    },
    {
      id: 5,
      NumeroOrden: 8,
      Estado: 'Terminado',
      Total: 854.0,
      Fecha: '11-07-2022 17:00',
      Orden: 'Maria Muriela',
      items: 7,
      colorEstado: 'bg-success',
    },
    {
      id: 6,
      NumeroOrden: 9,
      Estado: 'En proceso',
      Total: 765.0,
      Fecha: '10-02-2022 22:43',
      Orden: 'Martha Muñoz',
      items: 10,
      colorEstado: 'bg-primary',
    },
    {
      id: 7,
      NumeroOrden: 10,
      Estado: 'En espera',
      Total: 1278.0,
      Fecha: '10-02-2022 11:19',
      Orden: 'Maria del Carmen Soledispa Quimis',
      items: 4,
      colorEstado: 'bg-warning',
    },
    {
      id: 8,
      NumeroOrden: 11,
      Estado: 'Terminado',
      Total: 521.0,
      Orden: 'Pablo Gonzala',
      Fecha: '10-12-2022 13:09',
      items: 3,
      colorEstado: 'bg-success',
    },
    {
      id: 9,
      NumeroOrden: 12,
      Estado: 'En proceso',
      Total: 12.0,
      Orden: 'Jhon Monterrey',
      Fecha: '10-02-2022 19:44',
      items: 1,
      colorEstado: 'bg-primary',
    },
    {
      id: 10,
      NumeroOrden: 13,
      Estado: 'En espera',
      Total: 52.0,
      Orden: 'Mario Pillosalas',
      Fecha: '04-25-2022 06:06',
      items: 5,
      colorEstado: 'bg-warning',
    },
    {
      id: 10,
      NumeroOrden: 13,
      Estado: 'No procesada',
      Total: 522.0,
      Orden: 'Pedro Lupa',
      Fecha: '08-15-2022 18:06',
      items: 5,
      colorEstado: 'bg-danger',
    },
  ];
  searchPedidos: any = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscarProductos(e: any) {
    this.searchPedidos = e.target.value;
  }
  //BUSCAR PEDIDOS
  buscarDetallePedido(id: any) {
    this.router.navigate([
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.detalleListPedidosGet}`,
      id,
    ]);
  }
}
