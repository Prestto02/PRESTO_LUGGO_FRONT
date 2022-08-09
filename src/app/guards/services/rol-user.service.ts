import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EncryptService } from 'src/app/shared/class/Encryptar';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Injectable({
  providedIn: 'root',
})
export class RolUserService {
  private rolUser = new BehaviorSubject<any>('');
  rolUser$ = this.rolUser.asObservable();

  constructor(private route: Router, private encryp: EncryptService) {}
  //SETEO EL ROL DEL USUARIO
  setDataLocalStorage(data: any) {
    localStorage.setItem('dataUsuarioItems', `${data}`);
  }
  getLocalStorageRol() {
    return localStorage.getItem('dataUsuarioItems');
  }
  /* SETEAR EL ROL DE USUARIO */
  setDataRolUser(rol: any) {
    const data = this.verifyRolUser(rol);
    const rolCifrado = this.encryp.encrypOrDesrypRol(data, 'Encriptar'); //ENCRIPTO EL ROL DE USUARIO
    this.setDataLocalStorage(rolCifrado);
    this.rolUser.next(this.getLocalStorageRol());
  }
  /*  */
  desCryptRolUser(): any {
    const rolDescry = this.encryp.encrypOrDesrypRol(
      this.getLocalStorageRol(),
      'Desencriptar'
    );
    return rolDescry;
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
          `${UrlFront.Menu.menu}/${UrlFront.Menu.index}`
        ); //LO ENVIO AL PERFIL CLIENTE
        return 1; //RETORNO EL VALOR 1 PARA EL ROL
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
