import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPolitics, IPoliticsData } from '../models/IPolitics.models';

@Injectable({
  providedIn: 'root',
})
export class PoliticsEditService {
  url: string =
    'https://ecovitali.presttoapp.net/Puertto/Microservices/Library/api/';

  private editName = new BehaviorSubject('');
  editName$ = this.editName.asObservable();
  constructor(private http: HttpClient) {}
  //FOLDERS CRUD
  getFoldersPolitics(): Observable<any> {
    return this.http.get<any>(this.url + 'Folder');
  }

  putEditFolder(form: any): Observable<any> {
    return this.http.put<any>(this.url + 'Folder', form);
  }

  postFolder(form: any): Observable<any> {
    return this.http.post<any>(this.url + 'Folder', form);
  }

  deleteFolder(id: any): Observable<any> {
    return this.http.delete<any>(this.url + `Folder/${id}`);
  }

  getFoldersAll(): Observable<any> {
    return this.http.get<any>(this.url + 'DocumentFolder');
  }

  //POLITICS ARCHIVE CRUD
  getAllPolitics(): Observable<Array<IPoliticsData>> {
    return this.http.get<Array<IPoliticsData>>(this.url + 'Library');
  }

  //TRAIGO TODAS LAS POLITICAS PARA EL BOTON EDITAR
  getPoliticsId(id: any): Observable<any> {
    return this.http.get(this.url + `Library/${id}`);
  }

  postPolitics(form: any): Observable<any> {
    return this.http.post<any>(this.url + 'Library', form);
  }

  putPolitics(form: IPolitics): Observable<any> {
    return this.http.put<any>(this.url + `Library`, form);
  }

  deteletPolitics(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `Library/${id}`);
  }

  setEditName(edit: string): void {
    this.editName.next(edit);
  }
}
