import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class VerificarParamsService {
  constructor(private http: HttpClient) {}

  getParamsVerifyPayments(token: string): Observable<any> {
    return this.http.post<any>(
      `${UrlApi.ApiUrl}${UrlApi.verificador}${token}`,
      null
    );
  }
}
