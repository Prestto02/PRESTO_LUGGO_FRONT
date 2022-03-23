import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../shared/routes/RoutesFront';
import { BuscarUsuarioComponent } from '../buscar-usuario/buscar-usuario.component';
import { LoginComponent } from '../login.component';
import { RegistrarComponent } from '../registrar/registrar.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Login.iniciarSesion,
        component: LoginComponent,
      },
      {
        path: UrlFront.Login.postRegister,
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
