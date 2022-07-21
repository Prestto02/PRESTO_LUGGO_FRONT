import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { ListPedidosUsers } from '../models/ListPedidos.models';
import { TablePedidos } from '../table-pedidos/ArrayItemsPedidos';

@Injectable({
  providedIn: 'root',
})
export class ClientListPedidosService {
  constructor(private http: HttpClient) {}

  getPedidosUsers(id_venta: number): Observable<ListPedidosUsers[]> {
    return this.http.get<ListPedidosUsers[]>(
      `${UrlApi.ApiUrl}${UrlApi.listadoPedidos}/${id_venta}`
    );
  }

  getVentasUsers(): Observable<TablePedidos[]> {
    return this.http.get<TablePedidos[]>(
      `${UrlApi.ApiUrl}${UrlApi.ventaListaPedido}`
    );
  }
}
