import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ItemsClientMenu } from './models/ItemsMenuClient';
import { MenuClient } from './models/MenuClients.interface';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css'],
})
export class MiCuentaComponent implements OnInit {
  arrayList: MenuClient[] = ItemsClientMenu;
  bannerCliente: string = `${RepositorioImg.urlRepositorio}img/IMÁGENES/banners-usuarios/central-cliente.png`;
  constructor() {}

  ngOnInit(): void {}
}
