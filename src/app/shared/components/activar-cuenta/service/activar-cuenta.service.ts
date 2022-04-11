import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class ActivarCuentaService {
  constructor(private http: HttpClient) {}

  //VERIFICO EL CODIGO CON EL CODIGO QUE TIENE LA API
  postCheckRegister(check: any): Observable<any> {
    return this.http.post<any>(
      `${UrlApi.ApiUrl}${UrlApi.revisarCodigoActivacion}`,
      check
    );
  }
}
