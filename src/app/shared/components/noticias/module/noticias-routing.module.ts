import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { NoticiasComponent } from '../noticias.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.Noticias.noticiasBlog, //RUTA CARRITO
        component: NoticiasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasRoutingModule {}
