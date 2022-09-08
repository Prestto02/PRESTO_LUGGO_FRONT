import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from '../components/servicios.component';
import { ServiciosPuerttoRoutingModule } from './sevircios-puertto-routing.module';
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import { MenuIndexModule } from 'src/app/shared/components/index/menu-index/module/menu-index.module';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule,
    ServiciosPuerttoRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class ServiciosPuerttoModule {}
