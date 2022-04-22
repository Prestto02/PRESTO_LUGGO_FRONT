import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from '../../../routes/RoutesFront';
import { QuienesSomosComponent } from '../../quienes-somos/quienes-somos.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Menu.quienesSomos,
        component: QuienesSomosComponent,
      },
      {
        path: '**',
        redirectTo: UrlFront.Menu.index, //SI NO ENCUENTRA NADA REGRESAR AL INDEX
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuienesSomosRoutingModule {}
