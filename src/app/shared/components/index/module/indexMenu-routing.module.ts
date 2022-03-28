import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../../routes/RoutesFront';
import { SharedProductsComponent } from '../../shared-products/shared-products.component';
import { IndexComponent } from '../index.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Menu.index,
        component: IndexComponent,
      },
      {
        path: UrlFront.Menu.buscar,
        component: SharedProductsComponent,
      },
      {
        path: '**',
        redirectTo: UrlFront.Menu.index,
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
