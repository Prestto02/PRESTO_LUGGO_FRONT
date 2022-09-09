import { Component, OnInit } from '@angular/core';
import { ItemsAdnMenu } from './models/ArrayMenuItems';

@Component({
  selector: 'app-menu-informative-adn',
  templateUrl: './menu-informative-adn.component.html',
  styleUrls: ['./menu-informative-adn.component.css'],
})
export class MenuInformativeAdnComponent {
  ItemsAdnMenuInformative = ItemsAdnMenu;
  constructor() {}

  irRuta(route: string): void {
    console.log(route);
  }
}
