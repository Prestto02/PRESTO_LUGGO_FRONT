import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer2Component } from '../footer2/footer2.component';
import { FooterComponent } from '../footer/footer.component';
import { FooterIndexComponent } from '../footer-index.component';
import { FooterPuerttoComponent } from '../footer-puertto/footer-puertto.component';
import { CarouselSharedComponent } from '../../carousel-shared/carousel-shared.component';

@NgModule({
  declarations: [
    FooterIndexComponent, //FOOTER INDEX COMPONENTS
    FooterComponent, //FOOTER
    Footer2Component, //FOOTER2
    FooterPuerttoComponent,
    CarouselSharedComponent,
  ],
  imports: [CommonModule],
  providers: [],
  exports: [FooterIndexComponent, FooterPuerttoComponent, Footer2Component],
})
export class FooterIndexModule {}
