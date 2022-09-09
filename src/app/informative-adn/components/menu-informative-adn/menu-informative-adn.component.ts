import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ItemsAdnMenu } from './models/ArrayMenuItems';

@Component({
  selector: 'app-menu-informative-adn',
  templateUrl: './menu-informative-adn.component.html',
  styleUrls: ['./menu-informative-adn.component.css'],
})
export class MenuInformativeAdnComponent {
  ItemsAdnMenuInformative = ItemsAdnMenu;
  constructor(private route: Router) {}

  irRuta(): void {
    this.route.navigateByUrl(
      `${UrlFront.Users.users}/${UrlFront.Users.adnRegistrar}`
    );
  }
}
