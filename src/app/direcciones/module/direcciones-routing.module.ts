import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleRolGuard } from 'src/app/guards/multiple-rol.guard';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { IndexDireccionComponent } from '../components/index-direccion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Direcciones.direccionesId,
        canActivate: [MultipleRolGuard],
        component: IndexDireccionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionesRoutingModule {}
