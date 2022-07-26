import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//MODULE
import { ClienteRoutingModule } from './cliente-routing.module';
import { MenuIndexModule } from 'src/app/shared/components/index/menu-index/module/menu-index.module';
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import {
  DeclarationsPerfilCliente,
  ImportPerfilCliente,
  ProvidersPerfilCliente,
} from '../components/perfil-cliente/module/perfil-cliente.module';
//COMPONENTS
import { MiCuentaComponent } from '../components/mi-cuenta/mi-cuenta.component';
import { ListItemsCuentaComponent } from '../components/list-items-cuenta/list-items-cuenta.component';
import { ClienteCerrarSesionComponent } from '../components/cliente-cerrar-sesion/cliente-cerrar-sesion.component';
import { ListPedidosModule } from 'src/app/shared/components/list-pedidos/module/list-pedidos.module';
import { DireccionesModule } from 'src/app/direcciones/module/direcciones.module';

@NgModule({
  declarations: [
    MiCuentaComponent,
    ListItemsCuentaComponent,
    ClienteCerrarSesionComponent,
    DeclarationsPerfilCliente,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MenuIndexModule,
    ImportPerfilCliente,
    FooterIndexModule,
  ],
  providers: [ProvidersPerfilCliente],
})
export class ClienteModule {}
