import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { PerfilUsersComponent } from '../components/perfil-users/perfil-users.component';
import { UsersComponent } from '../components/users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Users.put,
        component: UsersComponent,
      },
      {
        path: UrlFront.Users.perfilUsuario,
        component: PerfilUsersComponent,
      },
      {
        path: '**',
        redirectTo: `/${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
