import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarComponent } from '../components/registrar/registrar.component';
import { LoginRoutingModule } from './login-routing.module';
import { ResetPasswordComponent } from '../components/reset-password/reset-password.component';
import { BaseFormLogin } from '../models/BaseFormLogin';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsExtensionsModule } from '../../shared/components/errors/errors-module.module';
import { BuscarUsuarioComponent } from '../components/buscar-usuario/buscar-usuario.component';
import { RedesSocialesComponent } from '../components/redes-sociales/redes-sociales.component';

@NgModule({
  declarations: [
    LoginComponent, //LOGIN COMPONENTS
    RegistrarComponent, //REGISTRAR COMPONENTS
    ResetPasswordComponent, //RESET-PASSWORD COMPONENTS
    BuscarUsuarioComponent, //BUSCAR-USUARIO COMPONENTS
    RedesSocialesComponent, //REDES SOCIALES USUARIOS
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
