import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { PagarComponent } from '../pagar.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Pagar.processoPagar, //RUTA CARRITO
        component: PagarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarRoutingModule {}
