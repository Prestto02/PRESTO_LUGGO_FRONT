import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthenticateGuard } from 'src/app/guards/login-authenticate.guard';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BuscarUsuarioComponent } from '../components/buscar-usuario/buscar-usuario.component';
import { GoogleComponent } from '../components/google/google.component';
import { LoginComponent } from '../components/login.component';
import { RegistrarComponent } from '../components/registrar/registrar.component';
import { ResetPasswordComponent } from '../components/reset-password/reset-password.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Login.iniciarSesion,
        canActivate: [LoginAuthenticateGuard],
        component: LoginComponent,
      },
      {
        path: UrlFront.Login.postRegister,
        canActivate: [LoginAuthenticateGuard],
        component: RegistrarComponent,
      },
      {
        path: UrlFront.Login.cambiarContrasena,
        component: ResetPasswordComponent,
      },
      {
        path: UrlFront.Login.buscarusuario,
        component: BuscarUsuarioComponent,
      },
      {
        path: UrlFront.Login.google,
        component: GoogleComponent,
      },
      {
        path: '**',
        redirectTo: UrlFront.Login.iniciarSesion,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
