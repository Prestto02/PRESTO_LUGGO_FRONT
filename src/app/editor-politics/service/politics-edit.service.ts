import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPolitics } from '../models/IPolitics.models';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class PoliticsEditService {
  constructor(private http: HttpClient) {}

  getAllPolitics(): Observable<Array<IPolitics>> {
    return this.http.get<Array<IPolitics>>(`${UrlApi.ApiUrl}${UrlApi.modulePolitics}`);
  }

  postPolitics(form: IPolitics): Observable<any> {
    return this.http.post<any>(`${UrlApi.ApiUrl}${UrlApi.modulePolitics}`, form);
  }

  putPolitics(form: IPolitics): Observable<any> {
    return this.http.put<any>(`${UrlApi.ApiUrl}${UrlApi.modulePolitics}`, form);
  }

  deteletPolitics(id: number): Observable<any> {
    return this.http.delete<any>(`${UrlApi.ApiUrl}${UrlApi.modulePolitics}`);
  }
}
