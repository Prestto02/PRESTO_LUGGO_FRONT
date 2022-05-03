import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagarRoutingModule } from './pagar-routing.module';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { PagarComponent } from '../pagar.component';

@NgModule({
  declarations: [PagarComponent],
  imports: [
    CommonModule,
    PagarRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class PagarModule {}
