import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';
/*************MODULE*********** */
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import {
  ProductModuleImport,
  ProductoModuleDeclarations,
  ProductoModuleProviders,
} from '../productos/module/producto-modulo.module';
/* CATEOGRY */
import {
  DeclarationsCategory,
  ExportCategory,
  ProviderCategory,
} from '../categorias/module/Category.module';
/* LIST PEDIDOS ADN */
import {
  ListaPedidosDeclarations,
  ListPedidosProviders,
} from '../lista-pedidos/module/Lista-Pedidos.module';
import { DashBoardModuloDeclarations } from '../dashboard/module/dashboard-modulo.module';
/**********        COMPONENTES      ********** */
import { ManagerVendedorRoutingModule } from './manger-vendedor-routing.module';
import { MenuVendedorComponent } from '../menu-vendedor/menu-vendedor.component';
import { ManagerVendedorComponent } from '../manager-vendedor.component';
import { SideBarIzquierdaComponent } from '../menu-vendedor/side-bar-izquierda/side-bar-izquierda.component';
/**********EXTENSIONES UTILES ERROES; MODELO; PIPE*********** */
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
import { FiltroPaginacionPipe } from '../productos/components/listado-productos/pipe/filtro-paginacion.pipe';
import { IndexMenuModule } from 'src/app/shared/components/index/module/index-menu.module';
import { MenuIndexModule } from 'src/app/shared/components/index/menu-index/module/menu-index.module';
import { AdnCerrarSesionComponent } from '../adn-cerrar-sesion/adn-cerrar-sesion.component';
import { SeccionAdnComponent } from '../seccion-adn/seccion-adn.component';
import { MensajesAyudaComponent } from '../mensajes-ayuda/mensajes-ayuda.component';

@NgModule({
  declarations: [
    ManagerVendedorComponent, //INDEX MANAGER
    DeclarationsCategory,
    ProductoModuleDeclarations, //PRODUCTO MODULO DECLARATIONS
    MenuVendedorComponent,
    FiltroPaginacionPipe, //FILTRO PAGINACION PIPE
    SideBarIzquierdaComponent, //SIDEBARS IZQUIERDA
    DashBoardModuloDeclarations, //MODULE DASHBOARD
    AdnCerrarSesionComponent, //ADN CERRAR SESION
    SeccionAdnComponent, //SECCION ADN PARA SABER EN QUE MODULO SE ENCUENTRA UBICADO
    MensajesAyudaComponent, // MENSAJES AYUDA COMPONENTS
    ListaPedidosDeclarations,
  ],
  imports: [
    ManagerVendedorRoutingModule, //MANAGER ROUTING
    CommonModule,
    HttpClientModule,
    AlifeFileToBase64Module, //MODULO PARA TRANSFORMAR LA IMAGEN A BASE 64
    ReactiveFormsModule, //FORMULARIO REACTIVO
    NgxChartsModule, //NGX CHARTS MODULE
    ErrorsExtensionsModule, //ERRORES
    DragDropModule, //DRAG AND DROP IMAGENES
    FooterIndexModule, //MODULE FOOTER INDEX
    ProductModuleImport, //PRODUCTS MODULE IMPORTS
    IndexMenuModule, //FOOTER
    NgxPaginationModule, //PAGINATIONS
    OrderModule, //ORDER MODULE
    MenuIndexModule, //MENU INDEX
  ],
  exports: [ExportCategory],
  providers: [
    ProductoModuleProviders, //MODULE PROVIDERS PRODUCTOS
    ProviderCategory,
    ListPedidosProviders,
  ],
})
export class ManagerVendedorModule {}
