import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { CarritoListComponent } from '../carrito-list.component';
import { CarritoListRoutingModule } from './carrito-list-routing.module';
import { ItemsCarritoComponent } from '../items-carrito/items-carrito.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CarritoListComponent, ItemsCarritoComponent],
  imports: [
    CommonModule,
    CarritoListRoutingModule,
    HttpClientModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class CarritoListModule {}
