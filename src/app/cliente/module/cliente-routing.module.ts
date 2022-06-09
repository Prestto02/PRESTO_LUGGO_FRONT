import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { MiCuentaComponent } from '../components/mi-cuenta/mi-cuenta.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Cliente.miCuenta,
        component: MiCuentaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
