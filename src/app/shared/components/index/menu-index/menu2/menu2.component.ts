import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { CategoriasService } from 'src/app/manager-vendedor/productos/services/categorias.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css'],
})
export class Menu2Component implements OnInit {
  categoriasItems: any = [];
  ocultarMenu: boolean = false;
  subCategorias: any = [];
  idUsuario: any;
  nombreCategoria = '';
  correoUsuario: any;
  constructor(
    private router: Router,
    private apiCategoria: CategoriasService, //SERVICE CATEGORIA
    private tokenUser: TokenService //TOKEN SERVICES
  ) {}

  ngOnInit(): void {
    this.getAllCategorias(); //TRAIGO TODAS LAS CATEGORIAS
    this.idUsuario = this.tokenUser.getTokenId(); //OBTENGO EL ID
    this.correoUsuario = this.tokenUser.getTokenEmail(); //OBTENGO EL EMAIL
  }
  //TODAS LAS CATEGORIAS
  getAllCategorias() {
    this.apiCategoria.getAllCategorias().subscribe((res) => {
      this.categoriasItems = res;
    });
  }
  //ABRIR SUBMENU
  AbrirSubMenu(index: any) {
    this.ocultarMenu = true;
    this.obtenerIndexMenu(index);
  }
  cerrarSubMenu() {
    this.ocultarMenu = false;
    this.subCategorias = [];
  }
  //OBTENGO POSICION DEL ARRAY
  obtenerIndexMenu(index: any) {
    this.nombreCategoria = index.name; //ASIGNO EL NOMBRE PADRE DE LA CATEGORIA
    this.apiCategoria.getIdCategoriaHijo(index.id).subscribe((res) => {
      this.subCategorias = res;
    });
  }
  //IR A MI PERFIL
  irAMiPerfil() {
    this.router.navigate([
      `${UrlFront.Users.users}/${UrlFront.Users.perfilRegistrar}/`,
      this.idUsuario,
    ]);
  }
  //IR A REGISTRARME
  registrarme() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.postRegister}`
    ); //REGISTRAR AL USUARIO
  }
  //CERRAR SESION
  logoutUser() {
    this.tokenUser.removeToken();
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
  //INCIAR SESION
  inciarSesion() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
  //IR A REGISTRARSE ADN
  venderPuerto() {
    this.router.navigateByUrl(
      `${UrlFront.Users.users}/${UrlFront.Users.adnRegistrar}`
    );
  }
}
