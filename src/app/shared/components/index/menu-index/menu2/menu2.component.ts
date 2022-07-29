import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { ListCategoryApi } from 'src/app/manager-vendedor/categorias/models/ListCategory';
import { CategoriasService } from 'src/app/manager-vendedor/productos/services/categorias.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { arrayListMasVendidos, ListeMenu } from './LisItemsMenu';
@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css'],
})
export class Menu2Component implements OnInit {
  categoriasItems: ReadonlyArray<ListCategoryApi> = [];
  ocultarMenu: boolean = false;
  subCategorias: ReadonlyArray<ListCategoryApi> = [];
  nombreCategoria = '';
  correoUsuario: any;
  arrayLisVendidos: ReadonlyArray<ListeMenu> = arrayListMasVendidos; //LIST LOS MAS VENDIDOS
  constructor(
    private router: Router,
    private apiCategoria: CategoriasService, //SERVICE CATEGORIA
    private tokenUser: TokenService //TOKEN SERVICES
  ) {
    this.correoUsuario = this.tokenUser.getTokenEmail(); //OBTENGO EL EMAIL
  }

  ngOnInit(): void {
    this.getAllCategorias(); //TRAIGO TODAS LAS CATEGORIAS
  }
  //TODAS LAS CATEGORIAS
  getAllCategorias() {
    this.apiCategoria
      .getAllCategorias()
      .subscribe((res: ReadonlyArray<ListCategoryApi>) => {
        this.categoriasItems = res;
      });
  }
  //ABRIR SUBMENU
  AbrirSubMenu(index: ListCategoryApi) {
    this.ocultarMenu = true;
    this.obtenerIndexMenu(index);
  }
  cerrarSubMenu() {
    this.ocultarMenu = false;
    this.subCategorias = [];
  }
  //OBTENGO POSICION DEL ARRAY
  obtenerIndexMenu(index: ListCategoryApi) {
    this.nombreCategoria = index.name; //ASIGNO EL NOMBRE PADRE DE LA CATEGORIA
    this.apiCategoria
      .getIdCategoriaHijo(index.id)
      .subscribe((res: ReadonlyArray<ListCategoryApi>) => {
        this.subCategorias = res;
      });
  }
  //IR A MI PERFIL
  irAMiPerfil() {
    /*   this.router.navigate([
      `${UrlFront.Users.users}/${UrlFront.Users.}/`,
      this.idUsuario,
    ]);  */
  }
  //IR A REGISTRARME
  registrarme() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.postRegister}`
    ); //REGISTRAR AL USUARIO
  }
}
