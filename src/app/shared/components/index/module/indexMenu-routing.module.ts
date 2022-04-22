import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../../routes/RoutesFront';
import { CompararProductosComponent } from '../../comparar-productos/comparar-productos.component';
import { ListaDeseosComponent } from '../../lista-deseos/lista-deseos.component';
import { QuienesSomosComponent } from '../../quienes-somos/quienes-somos.component';
import { IndexProductsComponent } from '../../shared-products/index-products.component';
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
        path: UrlFront.CompararProductos.compararProducto, //COMPARAR PRODUCTOS
        component: CompararProductosComponent,
      },
      {
        path: UrlFront.Menu.quienesSomos,
        component: QuienesSomosComponent,
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
