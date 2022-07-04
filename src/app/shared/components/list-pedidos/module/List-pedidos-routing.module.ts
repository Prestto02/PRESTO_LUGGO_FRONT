import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ListPedidosComponent } from '../list-pedidos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.listaPedidos.listado, //RUTA INDEX
        component: ListPedidosComponent,
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
export class ListaPedidosRoutingModule {}
