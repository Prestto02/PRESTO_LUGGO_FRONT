import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { AtencionClienteComponent } from '../atencion-cliente.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.AtencionCliente.atencionCliente, //RUTA INDEX
        component: AtencionClienteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtencionClienteRoutingModule {}
