import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { NgxChartsModule } from '@swimlane/ngx-charts';
/*************MODULE*********** */
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import {
  ProductoModuleDeclarations,
  ProductoModuleProviders,
} from '../productos/module/producto-modulo.module';
import { DashBoardModuloDeclarations } from '../dashboard/module/dashboard-modulo.module';
/**********        COMPONENTES      ********** */
import { ManagerVendedorRoutingModule } from './manger-vendedor-routing.module';
import { MenuVendedorComponent } from '../menu-vendedor/menu-vendedor.component';
import { ManagerVendedorComponent } from '../manager-vendedor.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { SideBarIzquierdaComponent } from '../menu-vendedor/side-bar-izquierda/side-bar-izquierda.component';
/**********EXTENSIONES UTILES ERROES; MODELO; PIPE*********** */
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
import { BaseFormCategorias } from '../categorias/models/categorias.models';
import { FilterCategorias } from '../categorias/pipes/FilterCategorias.pipe';
import { FiltroPaginacionPipe } from '../productos/components/listado-productos/pipe/filtro-paginacion.pipe';
import { IndexMenuModule } from 'src/app/shared/components/index/module/index-menu.module';
@NgModule({
  declarations: [
    ManagerVendedorComponent, //INDEX MANAGER
    CategoriasComponent, //CATEGORIAS
    FilterCategorias, //PIPES CATEGORIAS
    ProductoModuleDeclarations, //PRODUCTO MODULO DECLARATIONS
    MenuVendedorComponent,
    FiltroPaginacionPipe, //FILTRO PAGINACION PIPE
    SideBarIzquierdaComponent, //SIDEBARS IZQUIERDA
    DashBoardModuloDeclarations, //MODULE DASHBOARD
  ],
  imports: [
    ManagerVendedorRoutingModule, //MANAGER ROUTING
    CommonModule,
    HttpClientModule,
    AlifeFileToBase64Module, //MODULO PARA TRANSFORMAR LA IMAGEN A BASE 64
    ReactiveFormsModule, //FORMULARIO REACTIVO
    NgxChartsModule, //NGX CHARTS MODULE
    ErrorsExtensionsModule, //ERRORES
    FooterIndexModule, //MODULE FOOTER INDEX
    IndexMenuModule, //FOOTER
    NgxPaginationModule, //PAGINATIONS
    OrderModule, //ORDER MODULE
  ],
  providers: [
    ProductoModuleProviders, //MODULE PROVIDERS PRODUCTOS
    BaseFormCategorias,
  ],
})
export class ManagerVendedorModule {}
