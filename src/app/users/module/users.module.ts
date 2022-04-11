import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseUsersForm } from '../models/BaseFormUsers';
import { UsersComponent } from '../components/users.component';
import { FormsUsersComponent } from '../components/forms-users/forms-users.component';
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
import { PerfilUsersComponent } from '../components/perfil-users/perfil-users.component';
import { IndexMenuModule } from 'src/app/shared/components/index/module/index-menu.module';
@NgModule({
  declarations: [UsersComponent, FormsUsersComponent, PerfilUsersComponent],
  imports: [
    UsersRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    IndexMenuModule,
    ErrorsExtensionsModule,
  ],
  providers: [BaseUsersForm],
})
export class UsersModule {}
