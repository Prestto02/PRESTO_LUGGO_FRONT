import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../../routes/RoutesFront';
import { ListaDeseosComponent } from '../../lista-deseos/lista-deseos.component';
import { SharedProductsComponent } from '../../shared-products/shared-products.component';
import { IndexComponent } from '../index.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Menu.index, //RUTA INDEX
        component: IndexComponent,
      },
      {
        path: UrlFront.Menu.buscar, //RUTA BUSCAR PRODUCTOS
        component: SharedProductsComponent,
      },
      {
        path: UrlFront.ListaDeseos.listaDeseos, //RUTA LISTA DE DESEOS
        component: ListaDeseosComponent,
      },
      {
        path: '**',
        redirectTo: UrlFront.Menu.index, //SI NO ENCUENTRA NADA REGRESAR AL INDEX
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
