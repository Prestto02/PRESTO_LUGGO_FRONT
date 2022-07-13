import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolUserService } from 'src/app/guards/services/rol-user.service';
import { TokenService } from 'src/app/login/services/token.service';
import { EncryptService } from 'src/app/shared/class/Encryptar';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { CarritoItemsService } from './services/carrito-items.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  totalCarrito: any;
  idUsuario: any;
  emailUsuario: any;
  nombre: string = '';
  id: any;
  constructor(
    private router: Router,
    private tokenUser: TokenService //TOKEN SERVICES
  ) {}

  ngOnInit(): void {
    this.idUsuario = this.tokenUser.getTokenId(); //OBTENGO EL ID DEL USUARIO
    this.emailUsuario = this.tokenUser.getTokenEmail(); //OBTENGO EL EMAIL DEL USUARIO
  }
  //MENU INDEX
  menuIndex() {
    this.router.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
  }
  //LISTA DE DESEO
  irListaDeseos() {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.ListaDeseos.listaDeseos}`
    );
  }
}
