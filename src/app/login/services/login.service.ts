import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EncryptService } from 'src/app/shared/class/Encryptar';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private urlApi = UrlApi.ApiUrl; //URL API
  private url = UrlApi.usuario; //URL API CREATE USERS
  private urlLogin = UrlApi.login; //URL API LOGIN
  constructor(private http: HttpClient, private encryp: EncryptService) {}
  //TRAER AL USUARIO
  getUserDataApi(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${this.url}`);
  }
  //TRAER UN USUARIO
  getUserIdData(id: any): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${this.url}/${id}`);
  }
  //LOGIN USERS
  postUserLogin(form: any): Observable<any> {
    return this.http.post<any>(`${this.urlApi}${this.urlLogin}`, form);
  }
  //POST DATA API USER
  postUserDataApi(form: any): Observable<any> {
    return this.http.post<any>(`${this.urlApi}${this.url}`, form);
  }
  //PUT DATA API USER
  putUserDataApi(form: any, id: any): Observable<any> {
    return this.http.put<any>(`${this.urlApi}${this.url}/${id}`, form);
  }
  //DELETE USER
  deleteUserDataApi(id: any): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}${this.url}/${id}`);
  }
  //GUARDAR DATOS EN EL LOCALSTORAGE
  getDataLocalStorage(user: string, pass: string) {
    const { encUser, encryPass } = this.encryp.encrypDataLogin(user, pass);
    localStorage.setItem('user', encUser);
    localStorage.setItem('pass', encryPass);
  }
  getDescrypData(user: string, pass: string) {
    const { descPass, descUser } = this.encryp.desCryptDataLogin(user, pass);
    return { descPass, descUser };
  }
  //REMOVE LOCAL STORAGE
  removeLocalStorage() {
    localStorage.removeItem('user');
    localStorage.removeItem('pass');
  }
  cerrarSesionBackend(): Observable<any> {
    return this.http.post<any>(
      `${UrlApi.ApiUrl}${UrlApi.cerrarSesionBackEnd}`,
      null
    );
  }
}
