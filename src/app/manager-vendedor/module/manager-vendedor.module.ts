import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerVendedorRoutingModule } from './manger-vendedor-routing.module';
import { MenuVendedorComponent } from '../menu-vendedor/menu-vendedor.component';
import { ManagerVendedorComponent } from '../manager-vendedor.component';
import { ProductsComponent } from '../productos/components/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
import { BaseFormProducts } from '../productos/models/BaseformProduct';
import { CreateProductsComponent } from '../productos/components/create-products/create-products.component';
import { ListadoProductosComponent } from '../productos/components/listado-productos/listado-productos.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { CategoriasComponent } from '../categorias/categorias.component';
import { BaseFormCategorias } from '../categorias/models/categorias.models';
import { FilterCategorias } from '../categorias/pipes/FilterCategorias.pipe';
import { FiltroPaginacionPipe } from '../productos/components/listado-productos/pipe/filtro-paginacion.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    ManagerVendedorComponent, //INDEX MANAGER
    ProductsComponent, //INDEX PRODUCTOS
    CreateProductsComponent, //CREAR PRODUCTOS
    ListadoProductosComponent, // LISTADO DE PRODUCTOS
    CategoriasComponent, //CATEGORIAS
    FilterCategorias, //PIPES CATEGORIAS
    MenuVendedorComponent,
    FiltroPaginacionPipe, //FILTRO PAGINACION PIPE
  ],
  imports: [
    ManagerVendedorRoutingModule, //MANAGER ROUTING
    CommonModule,
    HttpClientModule,
    AlifeFileToBase64Module, //MODULO PARA TRANSFORMAR LA IMAGEN A BASE 64
    ReactiveFormsModule, //FORMULARIO REACTIVO
    ErrorsExtensionsModule, //ERRORES
    NgxPaginationModule, //PAGINATIONS
    OrderModule, //ORDER MODULE
  ],
  providers: [BaseFormProducts, BaseFormCategorias, CreateProductsComponent],
})
export class ManagerVendedorModule {}
