import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../login/services/token.service';
import { RepositorioImg } from '../shared/helpers/RepositorioImg';
import { ListItemsAdn } from './models/ArrayItemsAdn';

@Component({
  selector: 'app-manager-vendedor',
  templateUrl: './manager-vendedor.component.html',
  styleUrls: ['./manager-vendedor.component.css'],
})
export class ManagerVendedorComponent implements OnInit {
  bannerAdn: string = `${RepositorioImg.urlRepositorio}img/IMÁGENES/banners-usuarios/central-adn.png`;
  arrayList = ListItemsAdn;
  email: any;
  idUser: any;
  constructor(private _router: Router, private token: TokenService) {
    this.idUser = this.token.getTokenId();
  }

  ngOnInit(): void {
    this.email = this.token.getTokenEmail();
    this.idUser = this.token.getTokenId();
  }
  /* LINK PARA REDIRIGIR A OTRAS PAGINAS */
  irLink(link: string, title: string): void {
    if (title === 'Direcciones' || title === 'Mis compras') {
      this._router.navigateByUrl(`${link}/${this.idUser}`);
    } else {
      this._router.navigateByUrl(link);
    }
  }
}
