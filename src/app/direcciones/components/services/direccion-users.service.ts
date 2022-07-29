import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { Direcciones } from '../../models/Direcciones.models';

@Injectable({
  providedIn: 'root',
})
export class DireccionUsersService {
  private arrayUbicaciones = new BehaviorSubject<Direcciones[]>([]);
  ubicacionesArray$ = this.arrayUbicaciones.asObservable();
  constructor(private http: HttpClient) {}

  /* SETEAR ARRAY DE UBICACIONES */
  setArrayUbicaciones(direciones: Direcciones[]) {
    this.arrayUbicaciones.next(direciones);
  }
  /* TODAS LAS DIRECCIONES SEGUN EL USUARIO */
  getAllDireccionUser(): Observable<Direcciones[]> {
    return this.http.get<Direcciones[]>(
      `${UrlApi.ApiUrl}${UrlApi.direcciones}`
    );
  }
  /* TRAER DIRECCION PARA ACTUALIZAR */
  getUserDireccion(id_direccion: string): Observable<Direcciones> {
    return this.http.get<Direcciones>(
      `${UrlApi.ApiUrl}${UrlApi.direcciones}/${id_direccion}`
    );
  }
  /* POST */
  postDireccion(form: Direcciones): Observable<any> {
    return this.http.post<any>(`${UrlApi.ApiUrl}${UrlApi.direcciones}`, form);
  }
  /* PUT */
  putDireccion(form: Direcciones): Observable<any> {
    return this.http.put<any>(`${UrlApi.ApiUrl}${UrlApi.direcciones}`, form);
  }
  /* DELETE */
  delete(id_direccion: string): Observable<any> {
    return this.http.delete<any>(
      `${UrlApi.ApiUrl}${UrlApi.direcciones}/${id_direccion}`
    );
  }
}
