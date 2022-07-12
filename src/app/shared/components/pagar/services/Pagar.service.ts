import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({ providedIn: 'root' })
export class PagarServices {
  private resHTML = new BehaviorSubject<any>('');
  resultHTML = this.resHTML.asObservable();
  constructor(private http: HttpClient) {}

  postPagoUser(form: any): Observable<any> {
    return this.http.post<any>(`${UrlApi.ApiUrl}${UrlApi.pagarUser}`, form);
  }

  insertHTML(data: string): void {
    this.resHTML.next(data);
  }
}
