import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunidadComponent } from '../comunidad.component';
import { ChatOnlineComponent } from '../chat-online/chat-online.component';
import { ComunidadtRoutingModule } from './comunidad-routing.module';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';

@NgModule({
  declarations: [ComunidadComponent, ChatOnlineComponent],
  imports: [
    CommonModule,
    ComunidadtRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class ComunidadModule {}
