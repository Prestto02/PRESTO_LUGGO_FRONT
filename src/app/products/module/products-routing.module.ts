import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../shared/routes/RoutesFront';
import { ProductsComponent } from '../components/products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Products.create,
        component: ProductsComponent,
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
