import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//COMPONENTES
import { SectionCarouselComponent } from '../section-carousel/section-carousel.component';
import { SectionNoticiasComponent } from '../section-noticias/section-noticias.component';
import { SectionNovedadesComponent } from '../section-novedades/section-novedades.component';
import { SectionOfertasComponent } from '../section-ofertas/section-ofertas.component';
import { SectionOfertas2Component } from '../section-ofertas2/section-ofertas2.component';
import { SectionCardsInformationComponent } from '../section-cards-information/section-cards-information.component';
import { SectionCardsOfertasComponent } from '../section-cards-ofertas/section-cards-ofertas.component';
import { SectionServiciosComponent } from '../section-servicios/section-servicios.component';
import { SeccionesComponent } from '../secciones.component';

@NgModule({
  declarations: [
    SeccionesComponent, //SECCION INDEX
    SectionCarouselComponent,

    SectionNoticiasComponent,
    SectionNovedadesComponent,
    SectionOfertasComponent,
    SectionOfertas2Component,
    SectionCardsInformationComponent,
    SectionCardsOfertasComponent,
    SectionServiciosComponent,
  ],
  imports: [CommonModule],
  exports: [
    SeccionesComponent, //SECCION INDEX
    SectionServiciosComponent,
  ],
})
export class SeccionesModule {}
