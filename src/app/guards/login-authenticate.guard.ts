import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlFront } from '../shared/routes/RoutesFront';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthenticateGuard implements CanActivate {
  email: string | null = '';
  token: string | null = '';
  rolUsuario: string | null = '';
  constructor(private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (this.verifyLoginAuthenticate()) {
      this.router.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
      return false;
    }
    return true;
  }

  verifyLoginAuthenticate() {
    this.email = localStorage.getItem('correoUsuario');
    this.rolUsuario = localStorage.getItem('dataUsuarioItems');
    this.token = localStorage.getItem('Token');
    return this.email && this.rolUsuario && this.token ? true : false;
  }
}
