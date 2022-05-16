import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { PerfilUsersComponent } from '../components/perfil-users/perfil-users.component';
import { RegistrarAdnComponent } from '../components/registrar-adn/registrar-adn.component';
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
        path: UrlFront.Users.perfilRegistrar,
        component: PerfilUsersComponent,
      },
      {
        path: UrlFront.Users.perfilUsuario,
        component: PerfilUsersComponent,
      },
      {
        path: UrlFront.Users.adnRegistrar,
        component: RegistrarAdnComponent,
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
