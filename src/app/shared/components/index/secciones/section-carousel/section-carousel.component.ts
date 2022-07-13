import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BannersServices } from './services/Banners.service';
import { CardsService } from './services/Cards.service';

@Component({
  selector: 'app-section-carousel',
  templateUrl: './section-carousel.component.html',
  styleUrls: ['./section-carousel.component.css'],
})
export class SectionCarouselComponent implements OnInit {
  arrayCarouselImg: any = [];
  arrayCardImg: any = [];
  rutaImg = `${RepositorioImg.urlRepositorio}`;
  idUser: any;
  constructor(
    private router: Router,
    private token: TokenService,
    private cardsServi: CardsService,
    private bannerServi: BannersServices
  ) {
    this.idUser = this.token.getTokenId();
  }

  ngOnInit(): void {
    this.getCardsProducts();
    this.getBannersOfUser();
  }
  //TRAER TODAS LAS TARJETAS DE LOS PRODUCTOS
  getCardsProducts() {
    //EL UNO ES PARA LOS PRIMEROS CARDS
    this.cardsServi.getCardsById(1).subscribe((res: any) => {
      this.arrayCardImg = res;
    });
  }
  //GET BANNERS OF USERS
  getBannersOfUser() {
    //LOGEADO NO LOGEADO
    this.idUser
      ? this.getBanner('isSingIn=true', 'movil=false')
      : this.getBanner('false', 'movil=false');
  }
  //BANNERS PARA LOS USUARIOS SEGUN LOGEADO
  getBanner(variable: string, movil: string) {
    this.bannerServi.getBannersUSers(variable, movil).subscribe((res: any) => {
      this.arrayCarouselImg = res;
    });
  }
  //IR A OTODOS LOS PRODUCTOS
  verProductos(url: any) {
    this.router.navigateByUrl(`${UrlFront.Menu.menu}${url}`);
  }
}
