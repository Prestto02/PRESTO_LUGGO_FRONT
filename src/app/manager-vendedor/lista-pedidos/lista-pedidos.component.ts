import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { FormSearchProducts } from './models/FormSearchProducts';
import { ArrayListPedidos, ListPedidosAdn } from './models/ListPedidosAdn';
import { ApiPedidosService } from './service/api-pedidos.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
})
export class ListaPedidosComponent {
  ruta: string = `${UrlFront.Manager.vendedor}`;
  p: number = 1;
  arrayListaPedidos: ReadonlyArray<ListPedidosAdn> = ArrayListPedidos;
  constructor(
    private router: Router,
    public formB: FormSearchProducts,
    private api: ApiPedidosService
  ) {}

  getAllPedidos(): void {
    this.api
      .getAllPedidosUser()
      .subscribe((res: ReadonlyArray<ListPedidosAdn>) => {
        this.arrayListaPedidos = res;
      });
  }
  //BUSCAR PEDIDOS
  buscarDetallePedido(id: number) {
    this.router.navigate([
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.detalleListPedidosGet}`,
      id,
    ]);
  }
}
