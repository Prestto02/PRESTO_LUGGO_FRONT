import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import {
  ArrayDetallePedidos,
  DetallePedidosAdn,
} from '../models/DetallePedidosAdn';
import { ApiPedidosService } from '../service/api-pedidos.service';

@Component({
  selector: 'app-detalles-pedidos',
  templateUrl: './detalles-pedidos.component.html',
  styleUrls: ['./detalles-pedidos.component.css'],
})
export class DetallesPedidosComponent implements OnInit {
  ruta: string = `${UrlFront.Manager.vendedor}/${UrlFront.Manager.listaDePedidos}`;
  arrayDetallePedido: Readonly<DetallePedidosAdn> | null = null;
  pedidosMapeado: any; //PARA GUARDAR EL NUEVO ARREGLO SEGUN BUSCADO EN LA LISTA DE PEDIDOS DETALLES
  id: any;
  constructor(private router: ActivatedRoute, private api: ApiPedidosService) {
    this.id = this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //this.buscarDatos();
  }

  getDetailsVentas(): void {
    this.api
      .getDetailsPedidos(this.id)
      .subscribe((res: Readonly<DetallePedidosAdn>) => {
        this.arrayDetallePedido = res;
      });
  }
  //BUSCAR LOS DATOS
/*   buscarDatos() {
    this.id = parseInt(this.id);
    this.pedidosMapeado = this.arrayDetallePedido.find(
      (res: DetallePedidosAdn) => res.idPedido === this.id
    );
  } */
}
