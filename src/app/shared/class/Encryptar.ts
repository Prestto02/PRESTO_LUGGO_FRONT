import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptService {
  encRol: string = '';
  descRol: string = '';
  encIduser: string = '';
  descIdUser: string = '';
  constructor() {}

  encrypOrDesrypRol(rolEncrypt: any, tipo: string) {
    if (tipo === 'Encriptar') {
      this.encRol = CryptoJS.AES.encrypt(
        `${rolEncrypt}`,
        'rolUsuario'
      ).toString();
      return this.encRol;
    } else {
      this.descRol = CryptoJS.AES.decrypt(
        rolEncrypt.trim(),
        'rolUsuario'
      ).toString(CryptoJS.enc.Utf8);
      return this.descRol;
    }
  }
  encrypOrDescrypIdUser(idEncrypt: any, tipo: string) {
    if (tipo === 'Encriptar') {
      this.encIduser = CryptoJS.AES.encrypt(
        `${idEncrypt}`,
        'idUsuario'
      ).toString();
      return this.encIduser;
    } else {
      this.descIdUser = CryptoJS.AES.decrypt(
        this.encIduser.trim(),
        'idUsuario'
      ).toString(CryptoJS.enc.Utf8);
      return this.descIdUser;
    }
  }
}
