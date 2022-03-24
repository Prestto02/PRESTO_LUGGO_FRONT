import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  constructor() {}
  setTokenUsers(token: any) {
    localStorage.setItem('token', token);
  }
  getTokenUsers() {
    return localStorage.getItem('token');
  }
}
