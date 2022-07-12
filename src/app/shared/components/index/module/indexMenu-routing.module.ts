import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../../routes/RoutesFront';
/****************COMPONENTES***************** */
import { CompararProductosComponent } from '../../shared-products/comparar-productos/comparar-productos.component';
import { DetalleProductosComponent } from '../../shared-products/detalle-productos/detalle-productos.component';
import { IndexProductsComponent } from '../../shared-products/index-products.component';
import { ListaDeseosComponent } from '../../shared-products/lista-deseos/lista-deseos.component';
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
        component: IndexProductsComponent,
      },
      {
        path: UrlFront.ListaDeseos.listaDeseos, //RUTA LISTA DE DESEOS
        component: ListaDeseosComponent,
      },
      {
        path: UrlFront.Productos.detalleProducto,
        component: DetalleProductosComponent,
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
