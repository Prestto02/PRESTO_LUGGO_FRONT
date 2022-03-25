import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css'],
})
export class Menu2Component implements OnInit {
  subMenuCosmetico = false;
  subMenuHerramienta = false;
  subMenuMuebles = false;
  constructor() {}

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
}
