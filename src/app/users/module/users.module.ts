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
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import { ManagerVendedorModule } from 'src/app/manager-vendedor/module/manager-vendedor.module';

import {
  DeclarationAdnUser,
  ProvidersAdnUser,
} from '../components/registrar-adn/module/UserAdn.module';
import { PasswordVisibleModule } from 'src/app/shared/components/password-visible/password-visible.module';

@NgModule({
  declarations: [
    UsersComponent,
    FormsUsersComponent,
    PerfilUsersComponent,
    DeclarationAdnUser,
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
    PasswordVisibleModule,
  ],
  providers: [BaseUsersForm, PerfilUsersComponent, ProvidersAdnUser],
})
export class UsersModule {}
