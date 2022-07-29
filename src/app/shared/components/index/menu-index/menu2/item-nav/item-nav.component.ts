import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { arrayListItemsMenu, ListeMenu } from '../LisItemsMenu';

@Component({
  selector: 'app-item-nav',
  templateUrl: './item-nav.component.html',
  styleUrls: ['./item-nav.component.css'],
})
export class ItemNavComponent {
  @Input('white') white: string | null = null;
  @Input('width') width: number | null = null;
  @Input('heigth') heigth: number | null = null;
  @Input('tamano') tamano: string | null = null;
  arrayList: ReadonlyArray<ListeMenu> = arrayListItemsMenu;
  constructor(private router: Router) {}

  irAlLink(link: any) {
    this.router.navigateByUrl(link);
  }
  verProductos() {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}/todos`
    );
  }
}
