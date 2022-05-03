import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { DevolucionesComponent } from '../devoluciones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Devoluciones.devolucionBlog, //RUTA CARRITO
        component: DevolucionesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevolucionestRoutingModule {}
