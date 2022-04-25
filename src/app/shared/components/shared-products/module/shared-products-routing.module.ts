import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../../routes/RoutesFront';
import { CompararProductosComponent } from '../../shared-products/comparar-productos/comparar-productos.component';
import { IndexProductsComponent } from '../../shared-products/index-products.component';
import { ListaDeseosComponent } from '../../shared-products/lista-deseos/lista-deseos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Menu.buscar, //RUTA BUSCAR PRODUCTOS
        component: IndexProductsComponent,
      },
      {
        path: UrlFront.ListaDeseos.listaDeseos, //RUTA LISTA DE DESEOS
        component: ListaDeseosComponent,
      },
      {
        path: UrlFront.CompararProductos.compararProducto, //COMPARAR PRODUCTOS
        component: CompararProductosComponent,
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
export class SharedProductsRoutingModule {}
