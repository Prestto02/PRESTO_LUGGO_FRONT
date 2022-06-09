import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleRolGuard } from 'src/app/guards/multiple-rol.guard';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { PagarComponent } from '../pagar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Pagar.processoPagar, //RUTA CARRITO
        canActivate: [MultipleRolGuard],
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
