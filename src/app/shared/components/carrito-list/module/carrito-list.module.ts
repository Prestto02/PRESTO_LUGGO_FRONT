import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { CarritoListComponent } from '../carrito-list.component';
import { CarritoListRoutingModule } from './carrito-list-routing.module';

@NgModule({
  declarations: [CarritoListComponent],
  imports: [
    CommonModule,
    CarritoListRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class CarritoListModule {}
