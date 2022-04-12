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
    this.subCategorias.push(index);
    console.log(this.subCategorias);
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
}
