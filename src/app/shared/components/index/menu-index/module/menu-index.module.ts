import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//COMPONENTS
import { MenuComponent } from '../menu/menu.component';
import { Menu2Component } from '../menu2/menu2.component';
import { CarritoItemsComponent } from '../menu/carrito-items/carrito-items.component';
import { IniciarSesionComponent } from '../menu/iniciar-sesion/iniciar-sesion.component';
import { BaseFormProducts } from 'src/app/manager-vendedor/productos/models/BaseformProduct';
import { SubMenuCategoriasComponent } from '../menu2/sub-menu-categorias/sub-menu-cosmeticos.component';
import { MenuIndexComponent } from '../menu-index.component';
import { AutocompletadoProductosComponent } from '../menu/autocompletado-productos/autocompletado-productos.component';

@NgModule({
  declarations: [
    MenuIndexComponent, //MENU INDEX COMPONENTS
    MenuComponent, //PRIMER MENU
    Menu2Component, //SEGUNDO MENU
    CarritoItemsComponent, //ITEMS DE CARRITO DE COMPRA
    IniciarSesionComponent, //OOFCANVAS PARA INICIAR SESION
    SubMenuCategoriasComponent, //SUB MENU DE CATEGORIAS
    AutocompletadoProductosComponent, //AUTO COMPLETADO
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [Menu2Component, BaseFormProducts, CarritoItemsComponent],
  exports: [MenuIndexComponent, MenuComponent, Menu2Component],
})
export class MenuIndexModule {}
