import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { FormSearchProducts } from './models/FormSearchProducts';
import { ListPedidosAdn } from './models/ListPedidosAdn';
import { ApiPedidosService } from './service/api-pedidos.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
})
export class ListaPedidosComponent implements OnInit {
  ruta: string = `${UrlFront.Manager.vendedor}`;
  p: number = 1;
  arrayListaPedidos: ReadonlyArray<ListPedidosAdn> = [];
  constructor(
    private router: Router,
    public formB: FormSearchProducts,
    private api: ApiPedidosService
  ) {}
  /* NG ON INIT */
  ngOnInit(): void {
    this.getAllPedidos();
  }
  /* TODOS LOS PEDIDOS */
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
