import { Injectable } from '@angular/core';
import { local } from 'd3';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  setTokenUsers(token: any) {
    localStorage.setItem('idUsuario', token.id_usuario);
    localStorage.setItem('correoUsuario', token.email);
    localStorage.setItem('Token', token.token);
  }
  getTokenId() {
    return localStorage.getItem('idUsuario');
  }
  getTokenEmail() {
    return localStorage.getItem('correoUsuario');
  }
  getToken() {
    return localStorage.getItem('Token');
  }
  removeToken() {
    localStorage.removeItem('idUsuario');
    localStorage.removeItem('correoUsuario');
    localStorage.removeItem('Token');
  }
}
