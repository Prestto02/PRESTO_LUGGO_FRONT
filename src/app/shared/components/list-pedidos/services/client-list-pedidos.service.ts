import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { ListBuyUsers } from '../models/ListPedidos.models';
import { TableBuy } from '../table-pedidos/ArrayItemsPedidos';

@Injectable({
  providedIn: 'root',
})
export class ClientListPedidosService {
  constructor(private http: HttpClient) {}

  getPedidosUsers(id_venta: number): Observable<ListBuyUsers> {
    return this.http.get<ListBuyUsers>(
      `${UrlApi.ApiUrl}${UrlApi.listadoPedidos}/${id_venta}`
    );
  }

  getVentasUsers(): Observable<TableBuy[]> {
    return this.http.get<TableBuy[]>(
      `${UrlApi.ApiUrl}${UrlApi.listadoPedidos}`
    );
  }
}
