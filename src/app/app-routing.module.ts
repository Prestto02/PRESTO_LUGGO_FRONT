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
  //CLIENTE
  {
    path: UrlFront.Cliente.cliente,

    loadChildren: () =>
      import('./cliente/module/cliente.module').then((m) => m.ClienteModule),
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
  //ATENCION AL CLIENTE LAZY LOADING
  {
    path: UrlFront.AtencionCliente.atencion,
    loadChildren: () =>
      import(
        './shared/components/atencion-cliente/module/atencionCliente.module'
      ).then((m) => m.AtencionClienteModule),
  },
  //CARRITO LIST LAZY LOADING
  {
    path: UrlFront.CarritoList.carrito,
    loadChildren: () =>
      import(
        './shared/components/carrito-list/module/carrito-list.module'
      ).then((m) => m.CarritoListModule),
  },
  //PAGAR EL CARRITO LAZY LOADING
  {
    path: UrlFront.Pagar.pagar,
    loadChildren: () =>
      import('./shared/components/pagar/module/pagar.module').then(
        (m) => m.PagarModule
      ),
  },
  //TIENDAS LAZY LOADING
  {
    path: UrlFront.Tiendas.tiendas,
    loadChildren: () =>
      import('./shared/components/tiendas/module/tiendas.module').then(
        (m) => m.TiendasModule
      ),
  },
  //DEVOLUCIONES LAZY LOADING
  {
    path: UrlFront.Devoluciones.devolucion,
    loadChildren: () =>
      import(
        './shared/components/devoluciones/module/devoluciones.module'
      ).then((m) => m.DevolucionesModule),
  },
  //NOTICIAS LAZY LOADING
  {
    path: UrlFront.Noticias.noticias,
    loadChildren: () =>
      import('./shared/components/noticias/module/noticias.module').then(
        (m) => m.NoticiasModule
      ),
  },
  //POLITICAS LAZY LOADING
  {
    path: UrlFront.Politicas.politicas,
    loadChildren: () =>
      import('./shared/components/politicas/module/politicas.module').then(
        (m) => m.PoliticasModule
      ),
  },
  //COMUNIDAD LAZY LOADING
  {
    path: UrlFront.Comunidad.comunidad,
    loadChildren: () =>
      import('./shared/components/comunidad/module/comunidad.module').then(
        (m) => m.ComunidadModule
      ),
  },

  //QUIENES SOMOS LAZY LOADING
  {
    path: UrlFront.Menu.menu,
    loadChildren: () =>
      import(
        './shared/components/quienes-somos/module/quienes-somos.module'
      ).then((m) => m.QuienesSomosModule),
  },
  //PRODUCTO COMPARTIDO, LISTA DE DESEO, LISTA DE SCROLL INFINITO
  {
    path: UrlFront.Menu.menu,
    loadChildren: () =>
      import(
        './shared/components/shared-products/module/shared-products.module'
      ).then((m) => m.SharedProductosModule),
  },
  //ACTIVAR CUENTA LAZY LOADING
  {
    path: UrlFront.ActivarCuenta.cuenta,
    loadChildren: () =>
      import(
        './shared/components/activar-cuenta/module/activar-cuenta.module'
      ).then((m) => m.ActivarCuentaModule),
  },
  //MANAGER VENDEDOR LAZY LOADING
  {
    path: UrlFront.Manager.managerVendedor,
    loadChildren: () =>
      import('./manager-vendedor/module/manager-vendedor.module').then(
        (m) => m.ManagerVendedorModule
      ),
  },
  //REDIRECCIONAR EN MENU DIRECTO
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
