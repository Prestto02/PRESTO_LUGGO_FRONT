import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class UserAdnService {
  constructor(private http: HttpClient) {}

  postUserAdn(form: any): Observable<any> {
    return this.http.post<any>(`${UrlApi.ApiUrl}${UrlApi.registrarAdn}`, form);
  }
}
