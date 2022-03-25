import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../../routes/RoutesFront';
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
