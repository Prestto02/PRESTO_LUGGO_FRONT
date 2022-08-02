import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminosCondicionesRoutingModule } from './termino-condition-routing.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { TerminosCondicionesComponent } from '../terminos-condiciones.component';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { TerminosCondicionesDirective } from '../directive/terminos-condiciones.directive';

@NgModule({
  declarations: [TerminosCondicionesComponent, TerminosCondicionesDirective],
  imports: [
    CommonModule,
    TerminosCondicionesRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class TerminoCondicionesModule {}
