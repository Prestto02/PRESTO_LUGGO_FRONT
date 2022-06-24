import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({ providedIn: 'root' })
export class PagarServices {
  constructor(private http: HttpClient) {}

  postPagoUser(form: any): Observable<any> {
    return this.http.post<any>(`${UrlApi.ApiUrl}${UrlApi.pagarUser}`, form);
  }
}
