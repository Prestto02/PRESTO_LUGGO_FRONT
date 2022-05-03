import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendasComponent } from '../tiendas.component';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { TiendasRoutingModule } from './tiendas-routing.module';

@NgModule({
  declarations: [TiendasComponent],
  imports: [
    CommonModule,
    TiendasRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class TiendasModule {}
