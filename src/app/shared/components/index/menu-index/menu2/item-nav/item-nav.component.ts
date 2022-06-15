import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { arrayListItemsMenu } from './ListitemsMenu2';

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
}
