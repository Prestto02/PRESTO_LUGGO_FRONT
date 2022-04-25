import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer2Component } from '../footer2/footer2.component';
import { FooterComponent } from '../footer/footer.component';
import { FooterIndexComponent } from '../footer-index.component';

@NgModule({
  declarations: [
    FooterIndexComponent, //FOOTER INDEX COMPONENTS
    FooterComponent, //FOOTER
    Footer2Component, //FOOTER2
  ],
  imports: [CommonModule],
  providers: [],
  exports: [FooterIndexComponent, Footer2Component],
})
export class FooterIndexModule {}
