import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-section-noticias',
  templateUrl: './section-noticias.component.html',
  styleUrls: ['./section-noticias.component.css'],
})
export class SectionNoticiasComponent implements OnInit {
  card3Img1 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Audifonos.png`;
  card3Img2 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Celulares.png`;
  card3Img3 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Drones.png`;
  card3Img4 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/televisores.png`;
  card4Img1 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Maletas.png`;
  card4Img2 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Mancuernas.png`;
  card4Img3 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Ollas.png`;
  card4Img4 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Patinetas.png`;
  /* CARDS */
  cardIcons1 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/tecnologia.png`;
  cardIcons2 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/linea blanca.png`;
  cardIcons3 = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/taladro.png`;
  cardIconsFacebook = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Facebook - Original.png`;
  cardIconsGoogle = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Google - Original.png`;
  cardIconsMicrosoft = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Microsoft.png`;
  constructor() {}

  ngOnInit(): void {}
}
