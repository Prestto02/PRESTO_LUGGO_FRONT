import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteGuard } from 'src/app/guards/cliente.guard';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { MiCuentaComponent } from '../components/mi-cuenta/mi-cuenta.component';
import { PerfilClienteComponent } from '../components/perfil-cliente/perfil-cliente.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Cliente.miCuenta,
        canActivate: [ClienteGuard],
        component: MiCuentaComponent,
      },
      {
        path: UrlFront.Cliente.faceClientId,
        canActivate: [ClienteGuard],
        component: PerfilClienteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
