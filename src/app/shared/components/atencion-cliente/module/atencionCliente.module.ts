import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtencionClienteRoutingModule } from './atencionCliente-routing.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { AtencionClienteComponent } from '../atencion-cliente.component';

@NgModule({
  declarations: [AtencionClienteComponent],
  imports: [
    CommonModule,
    AtencionClienteRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class AtencionClienteModule {}
