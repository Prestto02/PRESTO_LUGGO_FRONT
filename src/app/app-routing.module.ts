import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFund404Component } from './shared/components/not-fund404/not-fund404.component';
import { UrlFront } from './shared/routes/RoutesFront';

const routes: Routes = [
  //USUARIOS LAZY LOADING
  {
    path: UrlFront.Users.users,
    loadChildren: () =>
      import('./users/module/users.module').then((m) => m.UsersModule),
  },

  //LOGIN LAZY LOADING
  {
    path: UrlFront.Login.login,
    loadChildren: () =>
      import('./login/module/login.module').then((m) => m.LoginModule),
  },

  //MENU LAZY LOADING
  {
    path: UrlFront.Menu.menu,
    loadChildren: () =>
      import('./shared/components/index/module/index-menu.module').then(
        (m) => m.IndexMenuModule
      ),
  },
  //ACTIVAR CUENTA
  {
    path: UrlFront.ActivarCuenta.cuenta,
    loadChildren: () =>
      import(
        './shared/components/activar-cuenta/module/activar-cuenta.module'
      ).then((m) => m.ActivarCuentaModule),
  },
  //MANAGER VENDEDOR
  {
    path: UrlFront.Manager.managerVendedor,
    loadChildren: () =>
      import('./manager-vendedor/module/manager-vendedor.module').then(
        (m) => m.ManagerVendedorModule
      ),
  },
  //REDIRECCIONAR EN LOGIN DIRECTO
  {
    path: '',
    redirectTo: UrlFront.Menu.menu,
    pathMatch: 'full',
  },
  //SI NO ENCUENTRA NINGUNA PAGINA
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: NotFund404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
