import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from '../../shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = UrlApi.usuario; //URL API CREATE USERS
  private urlLogin = UrlApi.login; //URL API LOGIN
  constructor(private http: HttpClient) {}
  //TRAER AL USUARIO
  getUserDataApi(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  //TRAER UN USUARIO
  getUserIdData(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
  //LOGIN USERS
  postUserLogin(form: any): Observable<any> {
    return this.http.post<any>(this.urlLogin, form);
  }
  //POST DATA API USER
  postUserDataApi(form: any): Observable<any> {
    return this.http.post<any>(this.url, form);
  }
  //PUT DATA API USER
  putUserDataApi(form: any, id: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, form);
  }
  //DELETE USER
  deleteUserDataApi(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
