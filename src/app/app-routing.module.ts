import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from './components/shared/routes/RoutesFront';

const routes: Routes = [
  //USUARIOS LAZY LOADING
  {
    path: UrlFront.Users.users,
    loadChildren: () =>
      import('./components/users/module/users.module').then(
        (m) => m.UsersModule
      ),
  },
  //LOGIN LAZY LOADING
  {
    path: UrlFront.Login.login,
    loadChildren: () =>
      import('./components/login/module/login.module').then(
        (m) => m.LoginModule
      ),
  },
  //MENU LAZY LOADING
  {
    path: UrlFront.Menu.menu,
    loadChildren: () =>
      import('./components/shared/index/module/index-menu.module').then(
        (m) => m.IndexMenuModule
      ),
  },
  //PRODUCTS
  {
    path: UrlFront.Products.products,
    loadChildren: () =>
      import('./components/products/module/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  //REDIRECCIONAR EN LOGIN DIRECTO
  { path: '', redirectTo: UrlFront.Login.login, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
