import { Component, Input, OnInit } from '@angular/core';
import { TokenService } from 'src/app/login/services/token.service';
import { BannersServices } from '../services/Banners.service';
import {
  cardTelephone,
  carouselTelephone,
  itemCards,
} from './ListItemsCarousel';

@Component({
  selector: 'app-section-carousel-telephone',
  templateUrl: './section-carousel-telephone.component.html',
  styleUrls: ['./section-carousel-telephone.component.css'],
})
export class SectionCarouselTelephoneComponent implements OnInit {
  listCarouse: carouselTelephone[] = [];
  listCard: cardTelephone[] = itemCards;
  idUser: any;
  constructor(
    private bannerServi: BannersServices,
    private token: TokenService
  ) {
    this.idUser = this.token.getTokenId();
  }

  ngOnInit(): void {
    this.getBannersOfUser();
  }

  //GET BANNERS OF USERS
  getBannersOfUser() {
    //LOGEADO NO LOGEADO
    this.idUser
      ? this.getBanner('isSingIn=true', '&isMovil=true')
      : this.getBanner('false', '&isMovil=true');
  }
  //BANNERS PARA LOS USUARIOS SEGUN LOGEADO
  getBanner(variable: string, movil: string) {
    this.bannerServi
      .getBannersUSers(variable, movil)
      .subscribe((res: carouselTelephone[]) => {
        console.log(res);
        this.listCarouse = res;
        console.log(this.listCarouse);
      });
  }
}
