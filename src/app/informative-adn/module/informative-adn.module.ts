import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformativeAdnRoutingModule } from './informative-adn-routing.module';
import { InformativeAdnComponent } from '../components/informative-adn.component';
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import { MenuIndexModule } from 'src/app/shared/components/index/menu-index/module/menu-index.module';

@NgModule({
  declarations: [InformativeAdnComponent],
  imports: [
    CommonModule,
    InformativeAdnRoutingModule,
    FooterIndexModule,
    MenuIndexModule,
  ],
})
export class InformativeAdnModule {}
