import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsClientMenu } from 'src/app/cliente/components/mi-cuenta/models/ItemsMenuClient';
import { MenuClient } from 'src/app/cliente/components/mi-cuenta/models/MenuClients.interface';
import { LoginService } from 'src/app/login/services/login.service';
import { TokenService } from 'src/app/login/services/token.service';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ItemsClientMenuOffCanvas } from './ArrayListUsers';

@Component({
  selector: 'app-menu-users',
  templateUrl: './menu-users.component.html',
  styleUrls: ['./menu-users.component.css'],
})
export class MenuUsersComponent implements OnInit {
  arrayCliente: MenuClient[] = ItemsClientMenuOffCanvas;
  idCliente: string | null;
  cerrarSesionImg: string = `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/cerrar-sesion.png`;
  registroAdn: string = `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/registro-adn.png`;
  name: string = '';
  users: string = 'Cliente';
  centerClient: string = `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`;
  linkVender: string = `${UrlFront.Users.users}/${UrlFront.Users.adnRegistrar}`;
  constructor(
    private route: Router,
    private Token: TokenService,
    private apiLogin: LoginService
  ) {
    this.idCliente = this.Token.getTokenId();
  }

  ngOnInit(): void {}

  irARuta(link: string) {
    link === this.centerClient || link === this.linkVender
      ? this.route.navigateByUrl(link)
      : this.route.navigateByUrl(`${link}/${this.idCliente}`);
  }

  cerrarSesion() {
    this.Token.removeToken();
    this.apiLogin.cerrarSesionBackend();
    this.route.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
