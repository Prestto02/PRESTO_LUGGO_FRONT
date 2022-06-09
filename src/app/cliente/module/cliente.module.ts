import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiCuentaComponent } from '../components/mi-cuenta/mi-cuenta.component';
import { ListItemsCuentaComponent } from '../components/list-items-cuenta/list-items-cuenta.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MenuIndexModule } from 'src/app/shared/components/index/menu-index/module/menu-index.module';
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import { ClienteCerrarSesionComponent } from '../components/cliente-cerrar-sesion/cliente-cerrar-sesion.component';

@NgModule({
  declarations: [
    MiCuentaComponent,
    ListItemsCuentaComponent,
    ClienteCerrarSesionComponent,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class ClienteModule {}
