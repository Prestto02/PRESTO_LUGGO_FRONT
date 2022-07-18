import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class EditProductService {
  constructor(private http: HttpClient) {}

  getProductEditId(id: number): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.editProductGet}${id}`);
  }

  editProduct(form: any, id: any): Observable<any> {
    return this.http.put<any>(
      `${UrlApi.ApiUrl}${UrlApi.articulos}/${id}`,
      form
    );
  }
}
