import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendasComponent } from '../tiendas.component';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { TiendasRoutingModule } from './tiendas-routing.module';
import { SectionsBannersComponent } from '../sections-banners/sections-banners.component';
import { MenuTiendaComponent } from '../menu-tienda/menu-tienda.component';
import { SeccionProductsComponent } from '../seccion-products/seccion-products.component';

@NgModule({
  declarations: [
    TiendasComponent,
    SectionsBannersComponent,
    MenuTiendaComponent,
    SeccionProductsComponent,
  ],
  imports: [
    CommonModule,
    TiendasRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class TiendasModule {}
