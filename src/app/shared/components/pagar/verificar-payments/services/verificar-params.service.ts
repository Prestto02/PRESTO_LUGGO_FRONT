import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class VerificarParamsService {
  private messagePayment = new BehaviorSubject<string>('');
  messageSuccess = this.messagePayment.asObservable();
  constructor(private http: HttpClient) {}

  getParamsVerifyPayments(token: string): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.verificador}${token}`);
  }
  //MESSAGE PAYMENTS
  setMessagePayments(message: string) {
    this.messagePayment.next(message);
  }
}
