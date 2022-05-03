import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ChatOnlineComponent } from '../chat-online/chat-online.component';
import { ComunidadComponent } from '../comunidad.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Comunidad.comunidadGeneral, //RUTA CARRITO
        component: ComunidadComponent,
      },
      {
        path: UrlFront.Comunidad.chatOnline,
        component: ChatOnlineComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunidadtRoutingModule {}
