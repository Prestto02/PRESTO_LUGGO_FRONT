import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UrlFront } from '../shared/routes/RoutesFront';

@Injectable({
  providedIn: 'root',
})
export class VendedorGuard implements CanActivate {
  number: any = 0;
  constructor(private route: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.verifyVendedorValue()) return true; //SI ES CLIENTE RETURNO TRUE
    this.route.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}` //SI NO ES CLIENTE LO LLEVO AL INICIO
    );
    return false;
  }

  //VERIFICO SI ES EL CLIENTE O ADMIN
  verifyVendedorValue(): boolean {
    this.number = localStorage.getItem('dataUsuarioItems');
    if (this.number === '2') {
      return true;
    } else {
      return false;
    }
  }
}
