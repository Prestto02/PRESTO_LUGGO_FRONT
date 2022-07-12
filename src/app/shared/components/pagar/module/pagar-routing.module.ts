import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleRolGuard } from 'src/app/guards/multiple-rol.guard';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { PagarComponent } from '../pagar.component';
import { VerificarPaymentsComponent } from '../verificar-payments/verificar-payments.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Pagar.processoPagar, //RUTA CARRITO
        canActivate: [MultipleRolGuard],
        component: PagarComponent,
      },
      {
        path: UrlFront.Pagar.verificarPago,
        component: VerificarPaymentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarRoutingModule {}
