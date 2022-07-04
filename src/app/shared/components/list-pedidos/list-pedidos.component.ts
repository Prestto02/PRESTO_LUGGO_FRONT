import { Component, OnInit } from '@angular/core';
import { ListPedidosUsers } from './models/ListPedidos.models';
import { ClientListPedidosService } from './services/client-list-pedidos.service';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.component.html',
  styleUrls: ['./list-pedidos.component.css'],
})
export class ListPedidosComponent implements OnInit {
  listPedidos: ListPedidosUsers[] = [];
  constructor(private apiListPedidos: ClientListPedidosService) {}

  ngOnInit(): void {
    this.getPedidosClient();
  }
  //OBTENTER TODOS LOS PEDIDOS DE LOS CLIENTES
  getPedidosClient() {
    this.apiListPedidos
      .getPedidosUsers()
      .subscribe((res: ListPedidosUsers[]) => {
        this.listPedidos = res;
      });
  }
}
