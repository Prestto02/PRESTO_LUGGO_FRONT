import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuClient } from 'src/app/cliente/components/mi-cuenta/models/MenuClients.interface';
import { RolUserService } from 'src/app/guards/services/rol-user.service';
import { LoginService } from 'src/app/login/services/login.service';
import { TokenService } from 'src/app/login/services/token.service';
import { EncryptService } from 'src/app/shared/class/Encryptar';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import {
  ItemsClientMenuOffCanvas,
  ItemsAdnMenuOffCanvas,
} from './ArrayListUsers';

@Component({
  selector: 'app-menu-users',
  templateUrl: './menu-users.component.html',
  styleUrls: ['./menu-users.component.css'],
})
export class MenuUsersComponent implements OnInit {
  arrayCliente: MenuClient[] = [];
  idCliente: string | null;
  cerrarSesionImg: string = `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/cerrar-sesion.png`;
  registroAdn: string = `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-users-perfil/registro-adn.png`;
  name: string = '';
  users: string = 'Cliente';
  centerClient: string = `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`;
  linkVender: string = `${UrlFront.Users.users}/${UrlFront.Users.adnRegistrar}`;
  rolTipo: any;
  rolTipoUsuario: any;
  constructor(
    private route: Router,
    private Token: TokenService,
    private apiLogin: LoginService,
    private authServi: RolUserService,
    private encrypServi: EncryptService
  ) {
    this.idCliente = this.Token.getTokenId();
  }

  ngOnInit(): void {
    this.irAlPerfilUsuario();
    this.verifyRolUsuario();
  }

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
  verifyRolUsuario() {
    this.irAlPerfilUsuario();
    console.log(this.rolTipoUsuario);
    if (this.rolTipoUsuario === '1') {
      this.arrayCliente = ItemsClientMenuOffCanvas;
    }
    if (this.rolTipoUsuario === '2') {
      this.arrayCliente = ItemsAdnMenuOffCanvas;
    }
  }
  //IR AL PERFIL DE USUARIO
  irAlPerfilUsuario() {
    this.rolTipo = localStorage.getItem('dataUsuarioItems');
    if (this.rolTipo) {
      this.rolTipo = this.encrypServi.encrypOrDesrypRol(
        this.rolTipo,
        'Desencriptar'
      ); //DESENCRIPTAR
      this.rolTipoUsuario = this.rolTipo;
      //this.authServi.verificarTipoRol(this.rolTipo); //PARA IR A LA RUTA SEGUN EL ROL
    }
  }
}
