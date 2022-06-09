import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Injectable({
  providedIn: 'root',
})
export class RolUserService {
  private rolUser = new BehaviorSubject<any>('');
  rolUser$ = this.rolUser.asObservable();

  constructor(private route: Router) {}
  //SETEO EL ROL DEL USUARIO
  setDataLocalStorage(data: any) {
    localStorage.setItem('dataUsuarioItems', `${data}`);
  }
  getLocalStorageRol() {
    return localStorage.getItem('dataUsuarioItems');
  }

  setDataRolUser(rol: any) {
    const data = this.verifyRolUser(rol);
    this.setDataLocalStorage(data);
    this.rolUser.next(this.getLocalStorageRol());
  }
  //VERIFICO EL TIPO DE ROL DE USUARIO SEGUN SU NUMERO
  verificarTipoRol(numero: any) {
    if (numero === '1') {
      this.route.navigateByUrl(
        `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`
      );
    }
    if (numero === '2') {
      this.route.navigateByUrl(
        `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}`
      );
    }
    /* this.route.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`); */
  }
  //VERIFICO EL ROL DEL USUARIO
  verifyRolUser(tipoRol: any) {
    switch (tipoRol) {
      case 'Cliente': {
        this.route.navigateByUrl(
          `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`
        );
        return 1;
      }
      case 'Vendedor': {
        this.route.navigateByUrl(
          `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}`
        );
        return 2;
      }
      case 'Administrador': {
        this.route.navigateByUrl(
          `${UrlFront.Menu.menu}/${UrlFront.Menu.index}`
        );
        return 3;
      }
      default: {
        this.route.navigateByUrl(
          `${UrlFront.Menu.menu}/${UrlFront.Menu.index}`
        );
        return 0;
      }
    }
  }
}