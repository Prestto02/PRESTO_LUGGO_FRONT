import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EncryptService } from '../shared/class/Encryptar';
import { UrlFront } from '../shared/routes/RoutesFront';

@Injectable({
  providedIn: 'root',
})
export class ClienteGuard implements CanActivate {
  number: any = 0;
  constructor(private router: Router, private encrypServi: EncryptService) {}

  canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (this.verifyClientValue()) return true; //SI ES CLIENTE RETURNO TRUE
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}` //SI NO ES CLIENTE LO LLEVO AL INICIO
    );
    return false;
  }
  //VERIFICO SI ES EL CLIENTE O ADMIN
  verifyClientValue(): boolean {
    this.number = localStorage.getItem('dataUsuarioItems');
    this.number = this.encrypServi.encrypOrDesrypRol(
      this.number,
      'Desencriptar'
    ); //DESENCRIPTO EL ROL DE USUARIO
    if (this.number === '1') {
      return true;
    } else {
      return false;
    }
  }
}
