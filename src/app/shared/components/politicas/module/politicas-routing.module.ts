import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { PoliticasComponent } from '../politicas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Politicas.politicasPuertto, //RUTA CARRITO
        component: PoliticasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticasRoutingModule {}
