//ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//MODULE
//COMPONENTS
import { IndexComponent } from '../index.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { IndexRoutingModule } from './indexMenu-routing.module';
import { Menu2Component } from '../menu2/menu2.component';
import { Footer2Component } from '../footer2/footer2.component';
import { SubMenuCategoriasComponent } from '../menu2/sub-menu-categorias/sub-menu-cosmeticos.component';
import { IniciarSesionComponent } from '../menu/iniciar-sesion/iniciar-sesion.component';
import { CarritoItemsComponent } from '../menu/carrito-items/carrito-items.component';
import { BaseFormProducts } from 'src/app/manager-vendedor/productos/models/BaseformProduct';
import { ListaDeseosComponent } from '../../lista-deseos/lista-deseos.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { AgregarColeccionComponent } from '../../lista-deseos/agregar-coleccion/agregar-coleccion.component';
import { ErrorsExtensionsModule } from '../../errors/errors-module.module';
import { BaseFormListaDeseos } from '../../lista-deseos/model/BaseFormListaDeseos.model';
import { CompararProductosComponent } from '../../comparar-productos/comparar-productos.component';
import { SeccionesModule } from '../secciones/module/secciones.module';
import { SharedProductosModule } from '../../shared-products/module/shared-products.module';
import { IndexProductsComponent } from '../../shared-products/index-products.component';

@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent,
    Menu2Component,
    IndexProductsComponent, //SHARED PRODUCTS COMPONENTS
    ListaDeseosComponent, //LISTA DE DESEOS
    AgregarColeccionComponent, //AGREGAR COLECCION DE LA LISTA DE DESEOS
    CompararProductosComponent,
    CarritoItemsComponent,
    SubMenuCategoriasComponent,
    IniciarSesionComponent, //OFF CANVAS INICIAR SESION
    FilterPipe, //FILTRAR POR PIPE
    Footer2Component, //FOOTER
    FooterComponent, //FOOTER
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SeccionesModule, //SECCION DEL MODULO
    SharedProductosModule, //LISTADO SCROLL INFINITO PRODUCTO
    FormsModule,
    ErrorsExtensionsModule, //ERRORES MODULE
  ],
  providers: [
    Menu2Component,
    BaseFormProducts,
    CarritoItemsComponent,
    BaseFormListaDeseos,
  ],
  exports: [MenuComponent, Footer2Component, Menu2Component],
})
export class IndexMenuModule {}
