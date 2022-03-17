import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../shared/routes/RoutesFront';
import { UsersComponent } from '../users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Users.put,
        component: UsersComponent,
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
