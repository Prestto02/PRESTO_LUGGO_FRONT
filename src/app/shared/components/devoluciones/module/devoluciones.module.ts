import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevolucionesComponent } from '../devoluciones.component';
import { DevolucionestRoutingModule } from './devoluciones-routing.module';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';

@NgModule({
  declarations: [DevolucionesComponent],
  imports: [
    CommonModule,
    DevolucionestRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class DevolucionesModule {}
