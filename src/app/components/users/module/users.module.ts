import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users.component';
import { FormsUsersComponent } from '../forms-users/forms-users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseUsersForm } from '../models/BaseFormUsers';
import { ErrorsExtensionsModule } from '../../shared/errors/errors-module.module';
@NgModule({
  declarations: [UsersComponent, FormsUsersComponent],
  imports: [
    UsersRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ErrorsExtensionsModule
  ],
  providers: [BaseUsersForm],
})
export class UsersModule {}
