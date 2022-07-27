import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import {
  ArrayDetallePedidos,
  DetallePedidosAdn,
} from '../models/DetallePedidosAdn';

@Component({
  selector: 'app-detalles-pedidos',
  templateUrl: './detalles-pedidos.component.html',
  styleUrls: ['./detalles-pedidos.component.css'],
})
export class DetallesPedidosComponent implements OnInit {
  ruta: string = `${UrlFront.Manager.vendedor}/${UrlFront.Manager.listaDePedidos}`;
  arrayDetallePedido: DetallePedidosAdn[] = ArrayDetallePedidos;
  pedidosMapeado: any; //PARA GUARDAR EL NUEVO ARREGLO SEGUN BUSCADO EN LA LISTA DE PEDIDOS DETALLES
  id: any;
  constructor(private router: ActivatedRoute) {
    this.id = this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.buscarDatos();
  }
  //BUSCAR LOS DATOS
  buscarDatos() {
    this.id = parseInt(this.id);
    this.pedidosMapeado = this.arrayDetallePedido.find(
      (res: DetallePedidosAdn) => res.idPedido === this.id
    );
  }
}
