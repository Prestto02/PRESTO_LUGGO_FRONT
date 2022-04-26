import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//MODULE
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
//COMPONENTS
import { SeccionPrincpialComponent } from '../seccion-princpial/seccion-princpial.component';
import { SeccionSecundariaComponent } from '../seccion-secundaria/seccion-secundaria.component';
import { SeccionTerceraComponent } from '../seccion-tercera/seccion-tercera.component';
import { SeccionCuartaComponent } from '../seccion-cuarta/seccion-cuarta.component';
import { SeccionQuintaComponent } from '../seccion-quinta/seccion-quinta.component';
import { QuienesSomosComponent } from '../quienes-somos.component';

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
    MenuIndexModule, //MENU MODULE INDEX
    FooterIndexModule, //FOOTER INDEX MODULE
    QuienesSomosRoutingModule,
  ],
})
export class QuienesSomosModule {}
