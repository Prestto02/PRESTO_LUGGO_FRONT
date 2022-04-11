//ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
//COMPONENTS
import { IndexComponent } from '../index.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { IndexRoutingModule } from './indexMenu-routing.module';
import { Menu2Component } from '../menu2/menu2.component';
import { SectionCarouselComponent } from '../section-carousel/section-carousel.component';
import { SectionNoticiasComponent } from '../section-noticias/section-noticias.component';
import { SectionNovedadesComponent } from '../../index/section-novedades/section-novedades.component';
import { SectionOfertasComponent } from '../section-ofertas/section-ofertas.component';
import { SectionOfertas2Component } from '../../index/section-ofertas2/section-ofertas2.component';
import { Footer2Component } from '../footer2/footer2.component';
import { SectionCardsInformationComponent } from '../section-cards-information/section-cards-information.component';
import { SectionCardsOfertasComponent } from '../section-cards-ofertas/section-cards-ofertas.component';
import { SectionServiciosComponent } from '../section-servicios/section-servicios.component';
import { SubMenuCategoriasComponent } from '../menu2/sub-menu-categorias/sub-menu-cosmeticos.component';
import { IniciarSesionComponent } from '../menu/iniciar-sesion/iniciar-sesion.component';
import { CarritoItemsComponent } from '../menu/carrito-items/carrito-items.component';
import { ResponsiveSectionCarouselComponent } from '../section-carousel/responsive-section-carousel/responsive-section-carousel.component';
import { ResponsiveSectionNovedadesComponent } from '../section-novedades/responsive-section-novedades/responsive-section-novedades.component';
import { ResponsiveSectionOfertas2Component } from '../section-ofertas2/responsive-section-ofertas2/responsive-section-ofertas2.component';
import { SharedProductsComponent } from '../../shared-products/list-products/shared-products.component';
import { BaseFormProducts } from 'src/app/manager-vendedor/productos/models/BaseformProduct';
import { ListaDeseosComponent } from '../../lista-deseos/lista-deseos.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { IndexProductsComponent } from '../../shared-products/index-products.component';

@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent,
    Menu2Component,
    SectionCarouselComponent,
    ResponsiveSectionCarouselComponent, //CAROUSEL SECTION
    SectionNoticiasComponent,
    SectionNovedadesComponent,
    ResponsiveSectionNovedadesComponent, //RESPONSIVE SECTION NOVEDadeS
    SectionOfertasComponent,
    SectionOfertas2Component,
    ResponsiveSectionOfertas2Component, //RESPONSIVE SECTION OFERTAS 2
    SectionCardsInformationComponent,
    SectionCardsOfertasComponent,
    SharedProductsComponent, //SHARED PRODUCTS
    IndexProductsComponent, //INDEX PRODUCTS SHARED
    ListaDeseosComponent, //LISTA DE DESEOS
    SectionServiciosComponent,
    CarritoItemsComponent,
    SubMenuCategoriasComponent,
    IniciarSesionComponent,
    FilterPipe, //FILTRAR POR PIPE
    Footer2Component,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    InfiniteScrollModule,
  ],
  providers: [Menu2Component, BaseFormProducts, CarritoItemsComponent],
  exports: [MenuComponent],
})
export class IndexMenuModule {}
