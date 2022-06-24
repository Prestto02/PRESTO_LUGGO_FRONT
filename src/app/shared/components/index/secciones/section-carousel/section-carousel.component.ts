import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { arrayCardImg } from './ListCardImg';
import { arrayListImgCarousel, arrayListImgCarouselLogout } from './ListImg';

@Component({
  selector: 'app-section-carousel',
  templateUrl: './section-carousel.component.html',
  styleUrls: ['./section-carousel.component.css'],
})
export class SectionCarouselComponent implements OnInit {
  arrayCarouselImg = arrayListImgCarousel;
  arrayCarouselImgLogout = arrayListImgCarouselLogout;
  arrayCardImg = arrayCardImg;
  idUser: any;
  constructor(private router: Router, private token: TokenService) {
    this.idUser = this.token.getTokenId();
  }

  ngOnInit(): void {}

  verProductos(url: any) {
    this.router.navigateByUrl(`${UrlFront.Menu.menu}${url}`);
  }
}
