import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../shared/routes/RoutesFront';
import { CreateProductsComponent } from '../components/create-products/create-products.component';
import { ProductsComponent } from '../components/products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Products.create,
        component: CreateProductsComponent,
      },
      {
        path: '**',
        redirectTo: UrlFront.Products.create,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
