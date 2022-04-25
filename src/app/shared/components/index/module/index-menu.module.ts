//ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//MODULE
import { MenuIndexModule } from '../menu-index/module/menu-index.module';
import { IndexRoutingModule } from './indexMenu-routing.module';
import { FooterIndexModule } from '../footer-index/module/footer-index.module';
//COMPONENTS
import { IndexComponent } from '../index.component';
import { ErrorsExtensionsModule } from '../../errors/errors-module.module';
import { SeccionesModule } from '../secciones/module/secciones.module';
import { SharedProductosModule } from '../../shared-products/module/shared-products.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    HttpClientModule,
    MenuIndexModule, //MENU INDEX MODULE
    SeccionesModule, //SECCION DEL MODULO
    FooterIndexModule, //INDEX FOOTER MODULE
    SharedProductosModule, //LISTADO SCROLL INFINITO PRODUCTO
    ErrorsExtensionsModule, //ERRORES MODULE
  ],
})
export class IndexMenuModule {}
