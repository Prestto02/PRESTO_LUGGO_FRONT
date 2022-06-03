import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { CategoriasService } from 'src/app/manager-vendedor/productos/services/categorias.service';
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
  id: any;
  constructor(
    private router: Router,
    private apiForm: CarritoItemsService, //FORMULARIO CATEGORIAS
    private tokenUser: TokenService, //TOKEN SERVICES
  ) {}

  ngOnInit(): void {
    this.totalItemsCarrito(); //TOTAL DE ITEMS DEL CARRITO
    this.idUsuario = this.tokenUser.getTokenId(); //OBTENGO EL ID DEL USUARIO
    this.emailUsuario = this.tokenUser.getTokenEmail(); //OBTENGO EL EMAIL DEL USUARIO
  }

  //IR AL PERFIL DE USUARIO
  irAlPerfilUsuario() {
    this.router.navigate([
      `${UrlFront.Users.users}/${UrlFront.Users.perfilRegistrar}/`,
      this.idUsuario,
    ]);
  }
  //TOTAL ITEMS CARRITO
  totalItemsCarrito() {
    this.apiForm.productsLengthtotal.subscribe((res) => {
      this.totalCarrito = res;
    });
  }
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
