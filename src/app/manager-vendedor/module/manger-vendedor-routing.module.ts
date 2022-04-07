import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ManagerVendedorComponent } from '../manager-vendedor.component';
import { ProductsComponent } from '../productos/components/products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Manager.vendedor,
        component: ManagerVendedorComponent,
      },
      {
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`,
        component: ProductsComponent,
      },
      {
        path: '**',
        redirectTo: `/${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}`,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerVendedorRoutingModule {}
