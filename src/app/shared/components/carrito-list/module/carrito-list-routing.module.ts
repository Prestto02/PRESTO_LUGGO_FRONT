import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { CarritoListComponent } from '../carrito-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.CarritoList.carritoList, //RUTA CARRITO
        component: CarritoListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritoListRoutingModule {}
