import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//COMPONENTS
import { MenuComponent } from '../menu/menu.component';
import { Menu2Component } from '../menu2/menu2.component';
import { CarritoItemsComponent } from '../menu/carrito-items/carrito-items.component';
import { IniciarSesionComponent } from '../menu/iniciar-sesion/iniciar-sesion.component';
import { SubMenuCategoriasComponent } from '../menu2/sub-menu-categorias/sub-menu-cosmeticos.component';
import { MenuIndexComponent } from '../menu-index.component';
import { AutocompletadoProductosComponent } from '../menu/autocompletado-productos/autocompletado-productos.component';
import { BaseFormSearchProducts } from '../menu/models/BaseFormSearchProduct';
import { ItemsProductsVerify } from 'src/app/shared/helpers/ItemsProductsVerify';
import { ItemNavComponent } from '../menu2/item-nav/item-nav.component';
import { UsuarioIdentificComponent } from '../menu2/usuario-identific/usuario-identific.component';
import { InputIncreaseDiminishComponent } from '../../../input-increase-diminish/input-increase-diminish.component';
import { MenuUsersComponent } from '../menu/menu-users/menu-users.component';
@NgModule({
  declarations: [
    MenuIndexComponent, //MENU INDEX COMPONENTS
    MenuComponent, //PRIMER MENU
    Menu2Component, //SEGUNDO MENU
    ItemNavComponent,
    CarritoItemsComponent, //ITEMS DE CARRITO DE COMPRA
    IniciarSesionComponent, //OOFCANVAS PARA INICIAR SESION
    SubMenuCategoriasComponent, //SUB MENU DE CATEGORIAS
    UsuarioIdentificComponent, //USUARIO IDENTIFICADO NUEVOS MENUS
    AutocompletadoProductosComponent, //AUTO COMPLETADO
    InputIncreaseDiminishComponent,
    MenuUsersComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    Menu2Component,
    BaseFormSearchProducts,
    CarritoItemsComponent,
    ItemsProductsVerify,
  ],
  exports: [
    MenuIndexComponent,
    MenuComponent,
    Menu2Component,
    InputIncreaseDiminishComponent,
  ],
})
export class MenuIndexModule {}
