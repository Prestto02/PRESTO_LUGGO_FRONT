import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { InformativeAdnComponent } from '../components/informative-adn.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: UrlFront.InformativeAdn.adn,
        component: InformativeAdnComponent,
      },
      {
        path: '**',
        redirectTo: `/${UrlFront.InformativeAdn.informative}/${UrlFront.InformativeAdn.adn}`,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformativeAdnRoutingModule {}
