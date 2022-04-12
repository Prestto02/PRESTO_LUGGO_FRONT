import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  setTokenUsers(token: any) {
    localStorage.setItem('idUsuario', token.id_usuario);
    localStorage.setItem('correoUsuario', token.email);
  }
  getTokenId() {
    return localStorage.getItem('idUsuario');
  }
  getTokenEmail() {
    return localStorage.getItem('correoUsuario');
  }
}
