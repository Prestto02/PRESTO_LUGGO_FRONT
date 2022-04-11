import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css'],
})
export class Menu2Component implements OnInit {
  subMenuCosmetico = false;
  subMenuHerramienta = false;
  subMenuMuebles = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  //COSmetiCO
  abrirSubMenuCosmetico() {
    this.subMenuCosmetico = true;
  }
  cerrarSubMenuCosmetico() {
    this.subMenuCosmetico = false;
  }
  //HERRAMIENTAS
  abrirSubMenuHerramienta() {
    this.subMenuHerramienta = true;
  }
  cerrarSubMenuHerramienta() {
    this.subMenuHerramienta = false;
  }
  //MUEBLES
  abrirSubMenuMuebles() {
    this.subMenuMuebles = true;
  }
  cerrarSubMenuMuebles() {
    this.subMenuMuebles = false;
  }
  //IR A MI PERFIL
  irAMiPerfil() {
    this.router.navigateByUrl(
      `${UrlFront.Users.users}/${UrlFront.Users.perfilUsuario}`
    );
  }
}
