import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { TerminosCondicionesComponent } from '../terminos-condiciones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.TerminoCondiciones.terminoCondiciones, //RUTA CARRITO
        component: TerminosCondicionesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminosCondicionesRoutingModule {}
