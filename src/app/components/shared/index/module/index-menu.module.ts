import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from '../index.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { IndexRoutingModule } from './indexMenu-routing.module';
import { Menu2Component } from '../menu2/menu2.component';
import { SectionCarouselComponent } from '../section-carousel/section-carousel.component';
import { SectionNoticiasComponent } from '../section-noticias/section-noticias.component';
import { SectionNovedadesComponent } from '../section-novedades/section-novedades.component';
import { SectionOfertasComponent } from '../section-ofertas/section-ofertas.component';
import { SectionOfertas2Component } from '../section-ofertas2/section-ofertas2.component';
import { Footer2Component } from '../footer2/footer2.component';
import { SectionCardsInformationComponent } from '../section-cards-information/section-cards-information.component';
import { SectionCardsOfertasComponent } from '../section-cards-ofertas/section-cards-ofertas.component';
import { SectionServiciosComponent } from '../section-servicios/section-servicios.component';
import { SubMenuCosmeticosComponent } from '../menu2/sub-menu-cosmeticos/sub-menu-cosmeticos.component';
import { SubMenuHerramientasComponent } from '../menu2/sub-menu-herramientas/sub-menu-herramientas.component';
import { SubMenuMueblesComponent } from '../menu2/sub-menu-muebles/sub-menu-muebles.component';
import { IniciarSesionComponent } from '../menu/iniciar-sesion/iniciar-sesion.component';
import { CarritoItemsComponent } from '../menu/carrito-items/carrito-items.component';
import { ResponsiveSectionCarouselComponent } from '../section-carousel/responsive-section-carousel/responsive-section-carousel.component';
import { ResponsiveSectionNovedadesComponent } from '../section-novedades/responsive-section-novedades/responsive-section-novedades.component';
import { ResponsiveSectionOfertas2Component } from '../section-ofertas2/responsive-section-ofertas2/responsive-section-ofertas2.component';

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
    SectionServiciosComponent,
    CarritoItemsComponent,
    SubMenuCosmeticosComponent,
    IniciarSesionComponent,
    SubMenuHerramientasComponent,
    SubMenuMueblesComponent,
    Footer2Component,
    FooterComponent,
  ],
  imports: [CommonModule, IndexRoutingModule],
  providers: [Menu2Component],
})
export class IndexMenuModule {}
