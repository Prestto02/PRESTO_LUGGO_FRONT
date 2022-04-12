import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { BaseFormProducts } from 'src/app/manager-vendedor/productos/models/BaseformProduct';
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
  //CATEGORIAs ITEMS
  categoriaItems: any[] = [];
  idUsuario: any;
  emailUsuario: any;
  constructor(
    private router: Router,
    public formB: BaseFormProducts, //FORMULARIO PRODUCTOS
    private apiForm: CarritoItemsService, //FORMULARIO CATEGORIAS
    private apiCategoria: CategoriasService, //SERVICES CATEGORIA
    private tokenUser: TokenService //TOKEN SERVICES
  ) {}

  ngOnInit(): void {
    this.totalItemsCarrito(); //TOTAL DE ITEMS DEL CARRITO
    this.getAllCategorias(); //TODAS LAS CATEGORIAS
    this.idUsuario = this.tokenUser.getTokenId();
    this.emailUsuario = this.tokenUser.getTokenEmail();
  }
  //TODAS LAS CATEGORIAS
  getAllCategorias() {
    this.apiCategoria.getAllCategorias().subscribe((res: any) => {
      this.categoriaItems = res;
    });
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
  //BUSCAR PRODUCTO
  buscarProducto() {
    const searchProducts = this.formB.formSearchProducts.get('nombre')?.value; //GUARDO LO QUE TENGO EN EL INPUT
    const categoria = this.formB.formSearchProducts.get('categoria')?.value; //GUARDO LO QUE TENGO EN EL INPUT
    this.router.navigate([
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}`,
      searchProducts,
      categoria,
    ]); //ENVIO POR URL LO QUE TENGO DEL INPUT
  }
  //LISTA DE DESEO
  irListaDeseos() {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.ListaDeseos.listaDeseos}`
    );
  }
}
