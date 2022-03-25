import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../../routes/RoutesFront';
import { ActivarCuentaComponent } from '../activar-cuenta.component';
import { BienvenidoUserComponent } from '../bienvenido-user/bienvenido-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.ActivarCuenta.activar,
        component: BienvenidoUserComponent,
      },
      {
        path: UrlFront.ActivarCuenta.enviarAlCorreo,
        component: ActivarCuentaComponent,
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
export class ActivarCuentaRoutingModule {}
