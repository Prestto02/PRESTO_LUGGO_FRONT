import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { arrayListItemsMenu } from '../LisItemsMenu';

@Component({
  selector: 'app-item-nav',
  templateUrl: './item-nav.component.html',
  styleUrls: ['./item-nav.component.css'],
})
export class ItemNavComponent implements OnInit {
  arrayList = arrayListItemsMenu;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irAlLink(link: any) {
    this.router.navigateByUrl(link);
  }
  verProductos() {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}/todos`
    );
  }
}
