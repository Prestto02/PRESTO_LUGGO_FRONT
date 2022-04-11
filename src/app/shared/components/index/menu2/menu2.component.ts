import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private router: Router,
    private apiCategoria: CategoriasService
  ) {}

  ngOnInit(): void {
    this.getAllCategorias(); //TRAIGO TODAS LAS CATEGORIAS
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
    this.router.navigateByUrl(
      `${UrlFront.Users.users}/${UrlFront.Users.perfilUsuario}`
    );
  }
}
