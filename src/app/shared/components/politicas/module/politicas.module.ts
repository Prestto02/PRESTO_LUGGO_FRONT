import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticasComponent } from '../politicas.component';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { PoliticasRoutingModule } from './politicas-routing.module';
import { VisualizarDocumentComponent } from '../visualizar-document/visualizar-document.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [PoliticasComponent, VisualizarDocumentComponent],
  imports: [
    CommonModule,
    PoliticasRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
    PdfViewerModule,
  ],
})
export class PoliticasModule {}
