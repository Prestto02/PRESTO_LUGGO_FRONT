import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IPoliticsArray } from '../models/PoliticsData.models';
@Injectable({
  providedIn: 'root',
})
export class PoliticsService {
  url: string =
    'https://ecovitali.presttoapp.net/Puertto/Microservices/Library/api/';
  constructor(private http: HttpClient) {}

  getFoldersPolitics(): Observable<IPoliticsArray> {
    return this.http.get<IPoliticsArray>(this.url + 'Politics');
  }

  getFoldersIdPolitics(id: any): Observable<IPoliticsArray> {
    return this.http.get<IPoliticsArray>(this.url + `Politics/${id}`);
  }
}
