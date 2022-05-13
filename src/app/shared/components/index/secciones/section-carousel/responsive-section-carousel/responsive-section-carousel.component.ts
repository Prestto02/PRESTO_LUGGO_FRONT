import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-responsive-section-carousel',
  templateUrl: './responsive-section-carousel.component.html',
  styleUrls: ['./responsive-section-carousel.component.css'],
})
export class ResponsiveSectionCarouselComponent implements OnInit {
  banner1 = `${RepositorioImg.urlRepositorio}img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Deportes.jpg`;
  banner2 = `${RepositorioImg.urlRepositorio}img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Diversión.jpg`;
  banner3 = `${RepositorioImg.urlRepositorio}img/banner-principales/LUGGO-banner-Producto-Oculus.jpg`;
  banner4 = `${RepositorioImg.urlRepositorio}img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Cocina.jpg`;
  banner5 = `${RepositorioImg.urlRepositorio}img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Cosméticos.jpg`;
  banner6 = `${RepositorioImg.urlRepositorio}img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Cuidado-Infantil.jpg`;
  banner7 = `${RepositorioImg.urlRepositorio}img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Hogar.jpg`;
  banner8 = `${RepositorioImg.urlRepositorio}img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Tecnología.jpg`;
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
  constructor() {}

  ngOnInit(): void {}
}
