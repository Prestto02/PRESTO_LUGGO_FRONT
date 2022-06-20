import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { arrayListImgCarousel } from './ListImg';

@Component({
  selector: 'app-section-carousel',
  templateUrl: './section-carousel.component.html',
  styleUrls: ['./section-carousel.component.css'],
})
export class SectionCarouselComponent implements OnInit {
  arrayCarouselImg = arrayListImgCarousel;
  /* CARDS  */
  card1 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-1/San Valentin.jpg`;
  card2Icon1 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-1/RelojFossil.jpg`;
  card2Icon2 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-1/RelojCassio.jpg`;
  card2Icon3 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-1/SmartBand.jpg`;
  card2Icon4 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-1/SmartBandA.jpg`;
  card3Img1 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-1/GorraAdidas.jpg`;
  card3Img2 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-1/GorraRealMadrid.jpg`;
  card3Img3 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-1/GorraSkaters.jpg`;
  card3Img4 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-1/GorraUnderArmour.jpg`;
  card4Img1 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-1/HechoEcuador.jpg`;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verProductos() {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}/todos`
    );
  }
}
