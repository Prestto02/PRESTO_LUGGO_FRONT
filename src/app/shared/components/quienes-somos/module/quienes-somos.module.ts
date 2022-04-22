import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosComponent } from '../quienes-somos.component';
import { IndexMenuModule } from '../../index/module/index-menu.module';
import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { SeccionPrincpialComponent } from '../seccion-princpial/seccion-princpial.component';
import { SeccionesModule } from '../../index/secciones/module/secciones.module';
import { SeccionSecundariaComponent } from '../seccion-secundaria/seccion-secundaria.component';
import { SeccionTerceraComponent } from '../seccion-tercera/seccion-tercera.component';
import { SeccionCuartaComponent } from '../seccion-cuarta/seccion-cuarta.component';
import { SeccionQuintaComponent } from '../seccion-quinta/seccion-quinta.component';

@NgModule({
  declarations: [
    QuienesSomosComponent, //QUIENES SOMOS
    SeccionPrincpialComponent, //SECCION PRINCIPAL
    SeccionSecundariaComponent, //SECCION SECUNDARIA
    SeccionTerceraComponent, //SECCION TERCERA
    SeccionCuartaComponent, //SECION CUARTA
    SeccionQuintaComponent, //SECCION QUINTA
  ],
  imports: [
    CommonModule,
    IndexMenuModule,
    QuienesSomosRoutingModule,
    SeccionesModule,
  ],
})
export class QuienesSomosModule {}
