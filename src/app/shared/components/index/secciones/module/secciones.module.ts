import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//COMPONENTES
import { SectionCarouselComponent } from '../section-carousel/section-carousel.component';
import { ResponsiveSectionCarouselComponent } from '../section-carousel/responsive-section-carousel/responsive-section-carousel.component';
import { SectionNoticiasComponent } from '../section-noticias/section-noticias.component';
import { SectionNovedadesComponent } from '../section-novedades/section-novedades.component';
import { ResponsiveSectionNovedadesComponent } from '../section-novedades/responsive-section-novedades/responsive-section-novedades.component';
import { SectionOfertasComponent } from '../section-ofertas/section-ofertas.component';
import { SectionOfertas2Component } from '../section-ofertas2/section-ofertas2.component';
import { ResponsiveSectionOfertas2Component } from '../section-ofertas2/responsive-section-ofertas2/responsive-section-ofertas2.component';
import { SectionCardsInformationComponent } from '../section-cards-information/section-cards-information.component';
import { SectionCardsOfertasComponent } from '../section-cards-ofertas/section-cards-ofertas.component';
import { SectionServiciosComponent } from '../section-servicios/section-servicios.component';
import { SeccionesComponent } from '../secciones.component';
import { SharedProductsComponent } from '../../../shared-products/list-products/shared-products.component';
import { SharedProductosModule } from '../../../shared-products/module/shared-products.module';

@NgModule({
  declarations: [
    SeccionesComponent, //SECCION INDEX
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
  ],
  imports: [CommonModule, SharedProductosModule],
  exports: [
    SeccionesComponent, //SECCION INDEX
    SectionServiciosComponent,
    SharedProductsComponent,
  ],
})
export class SeccionesModule {}
