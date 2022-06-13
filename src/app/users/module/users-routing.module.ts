import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthenticateGuard } from 'src/app/guards/login-authenticate.guard';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

import { RegistrarAdnComponent } from '../components/registrar-adn/registrar-adn.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Users.adnRegistrar,
        canActivate: [LoginAuthenticateGuard],
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
