import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

//MODULE
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { SeccionesModule } from '../../index/secciones/module/secciones.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
//COMPONENTS
import { SharedProductsComponent } from '../list-products/shared-products.component';
import { IndexProductsComponent } from '../index-products.component';
import { CompararProductosComponent } from '../comparar-productos/comparar-productos.component';
import { BaseFormListaDeseos } from '../lista-deseos/model/BaseFormListaDeseos.model';
import { ErrorsExtensionsModule } from '../../errors/errors-module.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedProductsRoutingModule } from './shared-products-routing.module';
import { ImagenProductsComponent } from '../detalle-productos/imagen-products/imagen-products.component';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { IconsCarsDesireComponent } from '../list-products/icons-cars-desire/icons-cars-desire.component';
import {
  DetalleProductDecalarations,
  DetalleProductModule,
} from '../detalle-productos/module/detalle-products.module';
import { NotFund404Component } from '../../not-fund404/not-fund404.component';
import { ListDeclarations } from '../lista-deseos/module/ListDeseo.module';
import { ListItemsDeseosComponent } from '../lista-deseos/list-items-deseos/list-items-deseos.component';

@NgModule({
  declarations: [
    IndexProductsComponent,
    SharedProductsComponent,
    ListDeclarations,
    ImagenProductsComponent, //IMAGEN DEL PRODUCTO
    CompararProductosComponent,
    DetalleProductDecalarations,
    IconsCarsDesireComponent,
    NotFund404Component,
  ],
  imports: [
    CommonModule,
    FormsModule, //PARA LA LISTA DE DESEOS
    ReactiveFormsModule, //PARA LA LISTA DE DESEOS
    HttpClientModule,
    ErrorsExtensionsModule, //ERRORES MODULE
    InfiniteScrollModule,
    SharedProductsRoutingModule,
    NgxImgZoomModule,
    SeccionesModule,
    DetalleProductModule,
    FooterIndexModule,
    MenuIndexModule,
  ],
  providers: [BaseFormListaDeseos, ListItemsDeseosComponent],
  exports: [SharedProductsComponent, IconsCarsDesireComponent],
})
export class SharedProductosModule {}
