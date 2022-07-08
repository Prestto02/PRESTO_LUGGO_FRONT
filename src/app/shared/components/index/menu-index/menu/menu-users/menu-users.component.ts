import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsClientMenu } from 'src/app/cliente/components/mi-cuenta/models/ItemsMenuClient';
import { MenuClient } from 'src/app/cliente/components/mi-cuenta/models/MenuClients.interface';
import { TokenService } from 'src/app/login/services/token.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-menu-users',
  templateUrl: './menu-users.component.html',
  styleUrls: ['./menu-users.component.css'],
})
export class MenuUsersComponent implements OnInit {
  arrayCliente: MenuClient[] = ItemsClientMenu;
  idCliente: string | null;
  users: string = 'Cliente';
  centerClient: string = `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`;
  linkVender: string = `${UrlFront.Users.users}/${UrlFront.Users.adnRegistrar}`;
  constructor(private route: Router, private Token: TokenService) {
    this.idCliente = this.Token.getTokenId();
  }

  ngOnInit(): void {}

  irARuta(link: string) {
    this.route.navigateByUrl(`${link}/${this.idCliente}`);
  }
}
