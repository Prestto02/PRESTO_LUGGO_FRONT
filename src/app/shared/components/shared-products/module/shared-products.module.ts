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
import { AgregarColeccionComponent } from '../lista-deseos/agregar-coleccion/agregar-coleccion.component';
import { CompararProductosComponent } from '../comparar-productos/comparar-productos.component';
import { FilterPipe } from 'src/app/shared/components/shared-products/lista-deseos/pipes/filter.pipe';
import { BaseFormListaDeseos } from '../lista-deseos/model/BaseFormListaDeseos.model';
import { ListaDeseosComponent } from '../lista-deseos/lista-deseos.component';
import { ErrorsExtensionsModule } from '../../errors/errors-module.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedProductsRoutingModule } from './shared-products-routing.module';

@NgModule({
  declarations: [
    IndexProductsComponent,
    SharedProductsComponent,
    ListaDeseosComponent,
    AgregarColeccionComponent,
    CompararProductosComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule, //PARA LA LISTA DE DESEOS
    ReactiveFormsModule, //PARA LA LISTA DE DESEOS
    HttpClientModule,
    ErrorsExtensionsModule, //ERRORES MODULE
    InfiniteScrollModule,
    SharedProductsRoutingModule,
    SeccionesModule,
    FooterIndexModule,
    MenuIndexModule,
  ],
  providers: [BaseFormListaDeseos],
  exports: [IndexProductsComponent, SharedProductsComponent],
})
export class SharedProductosModule {}