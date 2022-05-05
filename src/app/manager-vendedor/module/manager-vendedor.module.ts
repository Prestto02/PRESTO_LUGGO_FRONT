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
/**********        COMPONENTES      ********** */
import { ManagerVendedorRoutingModule } from './manger-vendedor-routing.module';
import { MenuVendedorComponent } from '../menu-vendedor/menu-vendedor.component';
import { ManagerVendedorComponent } from '../manager-vendedor.component';
import { ProductsComponent } from '../productos/components/products.component';
import { CreateProductsComponent } from '../productos/components/create-products/create-products.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { ListadoProductosComponent } from '../productos/components/listado-productos/listado-productos.component';
import { SideBarIzquierdaComponent } from '../menu-vendedor/side-bar-izquierda/side-bar-izquierda.component';
/*****DASHBOARD COMPONENTES**** */
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GraficoBarrasComponent } from '../dashboard/grafico-barras/grafico-barras.component';
import { CardPrincipalComponent } from '../dashboard/card-principal/card-principal.component';
import { CardSecundarioComponent } from '../dashboard/card-secundario/card-secundario.component';
/**********EXTENSIONES UTILES ERROES; MODELO; PIPE*********** */
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
import { BaseFormProducts } from '../productos/models/BaseformProduct';
import { BaseFormCategorias } from '../categorias/models/categorias.models';
import { FilterCategorias } from '../categorias/pipes/FilterCategorias.pipe';
import { FiltroPaginacionPipe } from '../productos/components/listado-productos/pipe/filtro-paginacion.pipe';
import { IndexMenuModule } from 'src/app/shared/components/index/module/index-menu.module';
import { LinealGraficoComponent } from '../dashboard/lineal-grafico/lineal-grafico.component';
import { PastelGraficoComponent } from '../dashboard/pastel-grafico/pastel-grafico.component';
import { SparklinesLinealComponent } from 'src/app/manager-vendedor/dashboard/card-secundario/sparklines-lineal/sparklines-lineal.component';
import { ProgressStepperComponent } from '../productos/components/progress-stepper/progress-stepper.component';
import { ConfiguracionProductoComponent } from '../productos/components/configuracion-producto/configuracion-producto.component';
import { ConfiguracionCapacidadComponent } from '../productos/components/configuracion-producto/configuracion-capacidad/configuracion-capacidad.component';
import { ConfiguracionColorComponent } from '../productos/components/configuracion-producto/configuracion-color/configuracion-color.component';
import { ConfiguracionTamanoComponent } from '../productos/components/configuracion-producto/configuracion-tamano/configuracion-tamano.component';
import { ImagenProductosComponent } from '../productos/components/imagen-productos/imagen-productos.component';

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
    SideBarIzquierdaComponent, //SIDEBARS IZQUIERDA
    DashboardComponent, //DASHBOARDCOMPONENTS
    CardPrincipalComponent, //CARD PRINCIPAL COMPONENTE
    GraficoBarrasComponent, //GRAFICO BARRAS COMPONENTS
    CardSecundarioComponent, // DASHBOARD CARD SECUNDARIO
    LinealGraficoComponent, //LINEAL GRAFICO DASHBOARD
    PastelGraficoComponent, //GRAFICO PASTEL DASHBOARD
    SparklinesLinealComponent, //LINEAL SKELETON
    ProgressStepperComponent, //PROGRESS STEPPER HORIZONTAL
    ConfiguracionProductoComponent, //CONFIGURACION DEL PRODUCTO
    ConfiguracionCapacidadComponent, //CONFIGURACION CAPACIDAD
    ConfiguracionColorComponent, //CONFIGURACION DEL COLOR
    ConfiguracionTamanoComponent, //CONFIGURACION DEL TAMANO
    ImagenProductosComponent, //IMAGEN DEL PRODUCTO
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
  providers: [BaseFormProducts, BaseFormCategorias, CreateProductsComponent],
})
export class ManagerVendedorModule {}
