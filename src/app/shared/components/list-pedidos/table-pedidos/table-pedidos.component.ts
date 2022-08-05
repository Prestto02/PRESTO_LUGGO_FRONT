import { Component, OnInit } from '@angular/core';
import { FormSearchBuy } from '../models/FormSearchBuy';
import { ListBuyUsers } from '../models/ListPedidos.models';
import { ClientListPedidosService } from '../services/client-list-pedidos.service';
import { HeaderItemsTable, TableBuy } from './ArrayItemsPedidos';

@Component({
  selector: 'app-table-pedidos',
  templateUrl: './table-pedidos.component.html',
  styleUrls: ['./table-pedidos.component.css'],
})
export class TablePedidosComponent implements OnInit {
  HeaderTable = HeaderItemsTable;
  arrayTable: ReadonlyArray<TableBuy> = [];
  listDetallesPedidos: any;
  p: number = 1; //PAGINACION EN 1
  constructor(
    private apiVenta: ClientListPedidosService,
    public formBuy: FormSearchBuy
  ) {}

  ngOnInit(): void {
    this.getVentasUsers();
  }
  //GET VENTAS USERS
  getVentasUsers() {
    this.apiVenta
      .getVentasUsers()
      .subscribe((res: ReadonlyArray<TableBuy>) => {
        this.arrayTable = res;
      });
  }

  //OBTENTER TODOS LOS PEDIDOS DE LOS CLIENTES
  getPedidosClient(id: number) {
    this.apiVenta
      .getPedidosUsers(id)
      .subscribe((res: Readonly<ListBuyUsers>) => {
        this.listDetallesPedidos = res;
      });
  }
}
