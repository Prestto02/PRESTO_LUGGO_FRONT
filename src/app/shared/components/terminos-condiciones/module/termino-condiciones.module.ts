import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminosCondicionesRoutingModule } from './termino-condition-routing.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { TerminosCondicionesComponent } from '../terminos-condiciones.component';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { TerminosCondicionesDirective } from '../directive/terminos-condiciones.directive';
import { TerminosSegundoComponent } from '../terminos-segundo/terminos-segundo.component';
import { TerminosTerceroComponent } from '../terminos-tercero/terminos-tercero.component';
import { TerminosCuartoComponent } from '../terminos-cuarto/terminos-cuarto.component';

@NgModule({
  declarations: [TerminosCondicionesComponent, TerminosCondicionesDirective, TerminosSegundoComponent, TerminosTerceroComponent, TerminosCuartoComponent],
  imports: [
    CommonModule,
    TerminosCondicionesRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class TerminoCondicionesModule {}
