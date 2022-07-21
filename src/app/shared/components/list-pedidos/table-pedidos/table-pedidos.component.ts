import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}

  verDetalles(id: number): void {}
}
