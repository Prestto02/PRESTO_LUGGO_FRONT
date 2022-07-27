import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { MarcaList } from '../components/create-products/models/MarcasLists';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  constructor(private http: HttpClient) {}
  //ALL MARCA
  getAllMarca(): Observable<MarcaList[]> {
    return this.http.get<MarcaList[]>(`${UrlApi.ApiUrl}${UrlApi.marcas}`);
  }
}
