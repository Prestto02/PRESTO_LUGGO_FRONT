import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../login/services/token.service';
import { RepositorioImg } from '../shared/helpers/RepositorioImg';
import { UrlFront } from '../shared/routes/RoutesFront';

@Component({
  selector: 'app-manager-vendedor',
  templateUrl: './manager-vendedor.component.html',
  styleUrls: ['./manager-vendedor.component.css'],
})
export class ManagerVendedorComponent implements OnInit {
  imagenPuerto = `${RepositorioImg.urlRepositorio}img/IMÁGENES/LOGGO_PUERTTO_EDIT_IMG.png`;
  imgEtiqueta = `${RepositorioImg.urlRepositorio}img/IMÁGENES/etiquetasAdn.png`;
  imgBilletera = `${RepositorioImg.urlRepositorio}img/IMÁGENES/billeteraAdn.png`;
  imgContenedorCarrito = `${RepositorioImg.urlRepositorio}img/IMÁGENES/contenedorCarritoAdn.png`;
  imgListContent = `${RepositorioImg.urlRepositorio}img/IMÁGENES/list-content-adn.png`;
  bannerAdn: string = `${RepositorioImg.urlRepositorio}img/IMÁGENES/banners-usuarios/central-adn.png`;
  email: any;
  constructor(private _router: Router, private token: TokenService) {}

  ngOnInit(): void {
    this.email = this.token.getTokenEmail();
  }

  irAlModuloCatalogo() {
    this._router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`
    );
  }
  irAPedidos() {
    this._router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listaDePedidos}`
    );
  }

  irAPrecios() {
    this._router.navigateByUrl('**');
  }
  irAPagos() {
    this._router.navigateByUrl('**');
  }
}
