import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { IUsers } from '../components/perfil-cliente/models/PersonaPerfil';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private urlApi = UrlApi.ApiUrl;
  private url = UrlApi.usuario; //URL API USuARIOS
  private urlPersona = UrlApi.persona; //URL API PERSONA
  private urlPersonaOne = UrlApi.getPersonaId; //TRAER PERSONA POR ID
  constructor(private http: HttpClient) {}

  //METODO PARA TRAER USUARIOS
  getDataUser(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${this.url}`);
  }
  //TRAER UN USUARIO
  getDataUserId(): Observable<IUsers> {
    return this.http.get<IUsers>(`${this.urlApi}${this.url}`);
  }
  getDataPerson(id: any): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${this.urlPersonaOne}/${id}`);
  }
  //PUT DATA PERSONA
  putDataPersona(form: IUsers): Observable<any> {
    return this.http.put<any>(
      `${this.urlApi}${this.url}`,
      form
    );
  }
  //DELETE
  deleteDataUser(id: any): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}${this.urlPersona}/${id}`);
  }
}
