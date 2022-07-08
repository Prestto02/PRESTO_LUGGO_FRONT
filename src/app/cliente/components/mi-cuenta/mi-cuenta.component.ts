import { Component, OnInit } from '@angular/core';
import { ItemsClientMenu } from './models/ItemsMenuClient';
import { MenuClient } from './models/MenuClients.interface';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css'],
})
export class MiCuentaComponent implements OnInit {
  arrayList: MenuClient[] = ItemsClientMenu;
  constructor() {}

  ngOnInit(): void {}
}
