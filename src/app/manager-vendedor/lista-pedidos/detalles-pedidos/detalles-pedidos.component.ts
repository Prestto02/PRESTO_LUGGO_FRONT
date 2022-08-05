import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { DetallePedidosAdn } from '../models/DetallePedidosAdn';
import { ApiPedidosService } from '../service/api-pedidos.service';

@Component({
  selector: 'app-detalles-pedidos',
  templateUrl: './detalles-pedidos.component.html',
  styleUrls: ['./detalles-pedidos.component.css'],
})
export class DetallesPedidosComponent implements OnInit {
  ruta: string = `${UrlFront.Manager.vendedor}/${UrlFront.Manager.listaDePedidos}`;
  urlImg: string = `${RepositorioImg.urlRepositorio}`;
  arrayDetallePedido: any;
  id: any;
  constructor(private router: ActivatedRoute, private api: ApiPedidosService) {
    this.id = this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getDetailsVentas();
  }
  //GET DETAILS VENTAS ID
  getDetailsVentas(): void {
    this.api
      .getDetailsPedidos(this.id)
      .subscribe((res: Readonly<DetallePedidosAdn>) => {
        console.log(res);
        this.arrayDetallePedido = res;
      });
  }
}
