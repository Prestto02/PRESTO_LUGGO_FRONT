import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { arrayListItemsMenu } from '../LisItemsMenu';

@Component({
  selector: 'app-item-nav',
  templateUrl: './item-nav.component.html',
  styleUrls: ['./item-nav.component.css'],
})
export class ItemNavComponent implements OnInit {
  @Input('white') white: string | null = null;
  @Input('width') width: number | null = null;
  @Input('heigth') heigth: number | null = null;
  @Input('tamano') tamano: string | null = null;
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
