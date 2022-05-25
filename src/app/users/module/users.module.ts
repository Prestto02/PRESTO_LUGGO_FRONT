import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
//MODULES
import { UsersRoutingModule } from './users-routing.module';
import { MenuIndexModule } from 'src/app/shared/components/index/menu-index/module/menu-index.module';

import { BaseUsersForm } from '../models/BaseFormUsers';
import { UsersComponent } from '../components/users.component';
import { FormsUsersComponent } from '../components/forms-users/forms-users.component';
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
import { PerfilUsersComponent } from '../components/perfil-users/perfil-users.component';
import { IndexMenuModule } from 'src/app/shared/components/index/module/index-menu.module';
import { RegistrarAdnComponent } from '../components/registrar-adn/registrar-adn.component';
import { BaseFormAdnUsers } from '../components/registrar-adn/models/BaseFormAdnUser';
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import { PositionStripperComponent } from '../components/registrar-adn/position-stripper/position-stripper.component';
import { SobreTuNegocioComponent } from '../components/registrar-adn/sobre-tu-negocio/sobre-tu-negocio.component';
import { BaseFormNegocioAdn } from '../components/registrar-adn/models/BaseFormNegocio';
import { TusPagosComponent } from '../components/registrar-adn/tus-pagos/tus-pagos.component';
import { BaseFormPagosAdn } from '../components/registrar-adn/models/BaseFormPagosAdn';
import { ManagerVendedorModule } from 'src/app/manager-vendedor/module/manager-vendedor.module';
import { TerminarRegistroComponent } from '../components/registrar-adn/terminar-registro/terminar-registro.component';
import { BaseFormTerminarAdn } from '../components/registrar-adn/models/BaseFormTerminar';
import { DataFormAdn } from '../components/registrar-adn/helpers/DataFormAdnUsers';
import { TerminosCondicionesComponent } from '../components/registrar-adn/terminos-condiciones/terminos-condiciones.component';

@NgModule({
  declarations: [
    UsersComponent,
    FormsUsersComponent,
    PerfilUsersComponent,
    RegistrarAdnComponent,
    PositionStripperComponent,
    SobreTuNegocioComponent,
    TusPagosComponent,
    TerminarRegistroComponent,
    TerminosCondicionesComponent,
  ],
  imports: [
    UsersRoutingModule,
    ReactiveFormsModule, //FORMULARIO REACTIVO
    CommonModule,
    MenuIndexModule, //MENU INDEX MODULE
    FooterIndexModule, //FOOTER MODULE
    HttpClientModule,
    ManagerVendedorModule,
    IndexMenuModule,
    ErrorsExtensionsModule, //ERRORES DE FORMULARIO REACTIVO
    AlifeFileToBase64Module, //BASE 64 IMG
  ],
  providers: [
    BaseUsersForm,
    PerfilUsersComponent,
    BaseFormAdnUsers,
    BaseFormPagosAdn,
    BaseFormNegocioAdn,
    BaseFormTerminarAdn,
    DataFormAdn,
  ],
})
export class UsersModule {}
