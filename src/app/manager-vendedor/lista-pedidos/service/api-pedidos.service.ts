import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { DetallePedidosAdn } from '../models/DetallePedidosAdn';
import { ListPedidosAdn } from '../models/ListPedidosAdn';

@Injectable({
  providedIn: 'root',
})
export class ApiPedidosService {
  constructor(private http: HttpClient) {}

  getAllPedidosUser(): Observable<ReadonlyArray<ListPedidosAdn>> {
    return this.http.get<ReadonlyArray<ListPedidosAdn>>(
      `${UrlApi.ApiUrl}${UrlApi.pedidosAdn}`
    );
  }
  /* TRAER PEDIDO POR DETALLE */
  getDetailsPedidos(
    id_pedido: number
  ): Observable<Readonly<DetallePedidosAdn>> {
    return this.http.get<Readonly<DetallePedidosAdn>>(
      `${UrlApi.ApiUrl}${UrlApi.pedidosAdn}${id_pedido}`
    );
  }
}
