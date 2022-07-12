import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticasComponent } from '../politicas.component';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { PoliticasRoutingModule } from './politicas-routing.module';

@NgModule({
  declarations: [PoliticasComponent],
  imports: [
    CommonModule,
    PoliticasRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class PoliticasModule {}
