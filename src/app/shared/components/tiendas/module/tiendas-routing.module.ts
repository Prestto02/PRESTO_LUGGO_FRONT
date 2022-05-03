import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { TiendasComponent } from '../tiendas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Tiendas.listTiendas, //RUTA CARRITO
        component: TiendasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendasRoutingModule {}
