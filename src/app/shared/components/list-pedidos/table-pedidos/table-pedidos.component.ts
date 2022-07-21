import { Component, OnInit } from '@angular/core';
import { ListPedidosUsers } from '../models/ListPedidos.models';
import { ClientListPedidosService } from '../services/client-list-pedidos.service';
import {
  ArrayItemsPedidos,
  HeaderItemsTable,
  HeaderTablePedido,
  TablePedidos,
} from './ArrayItemsPedidos';

@Component({
  selector: 'app-table-pedidos',
  templateUrl: './table-pedidos.component.html',
  styleUrls: ['./table-pedidos.component.css'],
})
export class TablePedidosComponent implements OnInit {
  HeaderTable: HeaderTablePedido = HeaderItemsTable;
  arrayTable: TablePedidos[] = ArrayItemsPedidos;
  listPedidos: ListPedidosUsers[] = [];
  p: number = 1; //PAGINACION EN 1
  constructor(private apiVenta: ClientListPedidosService) {}

  ngOnInit(): void {
    //this.getVentasUsers();
  }
  //GET VENTAS USERS
  getVentasUsers() {
    this.apiVenta.getVentasUsers().subscribe((res: TablePedidos[]) => {
      this.arrayTable = res;
    });
  }

  //OBTENTER TODOS LOS PEDIDOS DE LOS CLIENTES
  getPedidosClient(id: number) {
    this.apiVenta.getPedidosUsers(id).subscribe((res: ListPedidosUsers[]) => {
      this.listPedidos = res;
    });
  }
}
