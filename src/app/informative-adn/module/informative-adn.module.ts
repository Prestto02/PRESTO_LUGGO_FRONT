import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformativeAdnRoutingModule } from './informative-adn-routing.module';
import { InformativeAdnComponent } from '../components/informative-adn.component';
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import { MenuInformativeAdnComponent } from '../components/menu-informative-adn/menu-informative-adn.component';
import { SeccionInformativeDocumentComponent } from '../components/seccion-informative-document/seccion-informative-document.component';
import { SeccionInformativeComponent } from '../components/seccion-informative/seccion-informative.component';

@NgModule({
  declarations: [
    InformativeAdnComponent,
    MenuInformativeAdnComponent,
    SeccionInformativeComponent,
    SeccionInformativeDocumentComponent,
  ],
  imports: [CommonModule, InformativeAdnRoutingModule, FooterIndexModule],
})
export class InformativeAdnModule {}
