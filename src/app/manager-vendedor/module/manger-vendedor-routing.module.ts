import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendedorGuard } from 'src/app/guards/vendedor.guard';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetallesPedidosComponent } from '../lista-pedidos/detalles-pedidos/detalles-pedidos.component';
import { ListaPedidosComponent } from '../lista-pedidos/lista-pedidos.component';
import { ManagerVendedorComponent } from '../manager-vendedor.component';
import { CreateProductsComponent } from '../productos/components/create-products/create-products.component';
import { EditProductComponent } from '../productos/components/edit-product/edit-product.component';
import { ProductsComponent } from '../productos/components/products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Manager.vendedor,
        canActivate: [VendedorGuard],
        component: ManagerVendedorComponent,
      },
      {
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`,
        canActivate: [VendedorGuard],
        component: ProductsComponent,
      },
      {
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.crearProducto}`,
        canActivate: [VendedorGuard],
        component: CreateProductsComponent,
      },
      //EDITAR PRODUCTO
      {
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.editarProduct}`,
        canActivate: [VendedorGuard],
        component: EditProductComponent,
      },
      {
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.dashborad}`,
        canActivate: [VendedorGuard],
        component: DashboardComponent,
      },
      {
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.listaDePedidos}`,
        canActivate: [VendedorGuard],
        component: ListaPedidosComponent,
      },
      {
        path: `${UrlFront.Manager.vendedor}/${UrlFront.Manager.detalleListPedidos}`,
        canActivate: [VendedorGuard],
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
