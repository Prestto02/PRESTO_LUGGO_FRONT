import { Component, OnInit } from '@angular/core';
import { FormSearchBuy } from '../models/FormSearchBuy';
import { ListPedidosUsers } from '../models/ListPedidos.models';
import { ClientListPedidosService } from '../services/client-list-pedidos.service';
import {
  ArrayItemsPedidos,
  HeaderItemsTable,
  TablePedidos,
} from './ArrayItemsPedidos';

@Component({
  selector: 'app-table-pedidos',
  templateUrl: './table-pedidos.component.html',
  styleUrls: ['./table-pedidos.component.css'],
})
export class TablePedidosComponent implements OnInit {
  HeaderTable = HeaderItemsTable;
  arrayTable: ReadonlyArray<TablePedidos> = ArrayItemsPedidos;
  listDetallesPedidos: ReadonlyArray<ListPedidosUsers> = [];
  p: number = 1; //PAGINACION EN 1
  constructor(
    private apiVenta: ClientListPedidosService,
    public formBuy: FormSearchBuy
  ) {}

  ngOnInit(): void {
    //this.getVentasUsers();
  }
  //GET VENTAS USERS
  getVentasUsers() {
    this.apiVenta
      .getVentasUsers()
      .subscribe((res: ReadonlyArray<TablePedidos>) => {
        this.arrayTable = res;
      });
  }

  //OBTENTER TODOS LOS PEDIDOS DE LOS CLIENTES
  getPedidosClient(id: number) {
    this.apiVenta
      .getPedidosUsers(id)
      .subscribe((res: ReadonlyArray<ListPedidosUsers>) => {
        this.listDetallesPedidos = res;
      });
  }
}
