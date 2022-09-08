import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ServiciosComponent } from '../components/servicios.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.ServiciosPuertto.indexServicios,
        /* canActivate: [VendedorGuard], */
        component: ServiciosComponent,
      },
      {
        path: '**',
        redirectTo: `/${UrlFront.ServiciosPuertto.servicios}/${UrlFront.ServiciosPuertto.indexServicios}`,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosPuerttoRoutingModule {}
