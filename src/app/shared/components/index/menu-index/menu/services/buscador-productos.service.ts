import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class BuscadorProductosService {
  private listProductoBuscados = new BehaviorSubject<Array<any>>([]); //CREO El behaviorSUBJECT
  listProduct = this.listProductoBuscados.asObservable(); //OBTENGO EL BEHAVIORSUBJECT
  constructor(private http: HttpClient) {}

  getAllBuscadorProduct(resp: any): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.buscarProductoIndex}/${resp}`
    );
  }
  addSearchListProducts(data: any) {
    this.listProductoBuscados.next(data);
  }
}
