import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { ListCategoryApi } from '../../categorias/models/ListCategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private http: HttpClient) {}

  //TRAIGO TODAS LAS CATEGORIAS
  getAllCategorias(): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.categorias}`);
  }
  //TRAIGO EL ID DE LA CATEGORIA
  getIdCategoriaHijo(id: any): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.categoriasrHijos}${id}`
    );
  }
  //TRAER TODAS LAS CATEGORIAS PADRES
  getListCategorias(): Observable<ListCategoryApi[]> {
    return this.http.get<ListCategoryApi[]>(
      `${UrlApi.ApiUrl}${UrlApi.categoriasPadres}`
    );
  }
}
