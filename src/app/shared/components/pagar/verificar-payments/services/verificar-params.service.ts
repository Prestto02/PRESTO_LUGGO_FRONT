import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificarParamsService {

  constructor(private http:HttpClient) { }


/*   getParamsVerifyPayments():Observable<any>{
    return this.http.get<any>
  } */
}
