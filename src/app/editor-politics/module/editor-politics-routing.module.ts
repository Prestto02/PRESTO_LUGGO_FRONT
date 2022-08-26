import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorGuard } from 'src/app/guards/editor.guard';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { EditorPoliticsComponent } from '../editor-politics.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.PoliticasEdicion.politics,
       /*  canActivate: [EditorGuard], */
        component: EditorPoliticsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorPoliticsRoutingModule {}
