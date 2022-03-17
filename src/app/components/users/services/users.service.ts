import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlApi } from '../../shared/routes/RoutesApi';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = UrlApi.usuario; //URL API
  private urlPersona = UrlApi.persona; //URL API PERSONA
  constructor(private http: HttpClient) {}

  //METODO PARA TRAER USUARIOS
  getDataUser(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  //TRAER UN USUARIO
  getDataUserId(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
  //GUARDAR USUSARIO
  postDataUSer(form: any): Observable<any> {
    return this.http.post<any>(this.url, form);
  }
  //PUT
  putDataUser(form: any): Observable<any> {
    return this.http.put<any>(`${this.urlPersona}`, form);
  }
  //DELETE
  deleteDataUser(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
