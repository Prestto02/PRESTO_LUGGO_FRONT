import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetallesPedidosComponent } from '../lista-pedidos/detalles-pedidos/detalles-pedidos.component';
import { ListaPedidosComponent } from '../lista-pedidos/lista-pedidos.component';
import { ManagerVendedorComponent } from '../manager-vendedor.component';
import { CreateProductsComponent } from '../productos/components/create-products/create-products.component';
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
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.crearProducto}`,
        component: CreateProductsComponent,
      },
      {
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.dashborad}`,
        component: DashboardComponent,
      },
      {
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.listaDePedidos}`,
        component: ListaPedidosComponent,
      },
      {
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.detalleListPedidos}`,
        component: DetallesPedidosComponent,
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
