import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class CarritoUserLoginService {
  constructor(private http: HttpClient) {}

  postCarritoItems(form: any): Observable<any> {
    return this.http.post<any>(
      `${UrlApi.ApiUrl}${UrlApi.carritoPostUser}`,
      form
    );
  }
}
