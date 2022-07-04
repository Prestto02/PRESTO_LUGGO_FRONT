import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { ListPedidosUsers } from '../models/ListPedidos.models';

@Injectable({
  providedIn: 'root',
})
export class ClientListPedidosService {
  constructor(private http: HttpClient) {}

  getPedidosUsers(): Observable<ListPedidosUsers[]> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.listadoPedidos}`);
  }
}
