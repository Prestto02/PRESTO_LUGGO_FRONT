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
  //ENCRIPTAR EL ROL DEL USUARIO
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
  //ENCRIPTAR EL ID DEL USUARIO
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
  //ENCRYPDATA USER
  encrypDataLogin(user: any, pass: any) {
    const encUser = CryptoJS.AES.encrypt(
      `${user}`,
      'userLocalStorageLogin'
    ).toString();
    const encryPass = CryptoJS.AES.encrypt(
      `${pass}`,
      'passLocalStorageLogin'
    ).toString();
    return { encUser, encryPass };
  }
  //DESCRYPT DATA LOGIN
  desCryptDataLogin(encUser: any, encPass: any) {
    const descUser: string = CryptoJS.AES.decrypt(
      encUser.trim(),
      'userLocalStorageLogin'
    ).toString(CryptoJS.enc.Utf8);
    const descPass: string = CryptoJS.AES.decrypt(
      encPass.trim(),
      'passLocalStorageLogin'
    ).toString(CryptoJS.enc.Utf8);
    return { descUser, descPass };
  }
}
