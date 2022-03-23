import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarComponent } from '../registrar/registrar.component';
import { LoginRoutingModule } from './login-routing.module';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { BaseFormLogin } from '../models/BaseFormLogin';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsExtensionsModule } from '../../shared/errors/errors-module.module';
import { BuscarUsuarioComponent } from '../buscar-usuario/buscar-usuario.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    ResetPasswordComponent,
    BuscarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ErrorsExtensionsModule,
  ],
  providers: [BaseFormLogin],
})
export class LoginModule {}
