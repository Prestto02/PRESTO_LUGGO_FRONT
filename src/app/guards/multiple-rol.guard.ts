import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlFront } from '../shared/routes/RoutesFront';

@Injectable({
  providedIn: 'root',
})
export class MultipleRolGuard implements CanActivate {
  number: any = 0;
  constructor(private route: Router) {}
  canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (this.verifyMultipleRolValue()) {
      return true;
    } else {
      this.route.navigateByUrl(
        `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
      );
      return false;
    }
  }
  //VERIFICO SI ES EL CLIENTE O ADMIN
  verifyMultipleRolValue(): boolean {
    this.number = localStorage.getItem('dataUsuarioItems');
    if (this.number === '1') {
      return true;
    }
    if (this.number === '2') {
      return true;
    }
    return false;
  }
}
