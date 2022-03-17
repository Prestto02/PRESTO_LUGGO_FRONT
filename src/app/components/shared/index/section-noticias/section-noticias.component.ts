import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-noticias',
  templateUrl: './section-noticias.component.html',
  styleUrls: ['./section-noticias.component.css'],
})
export class SectionNoticiasComponent implements OnInit {
  card3Img1 =
    'http://192.168.1.174/img/IM%C3%81GENES/Cards-section-2/Audifonos.png';
  card3Img2 =
    'http://192.168.1.174/img/IM%C3%81GENES/Cards-section-2/Celulares.png';
  card3Img3 =
    'http://192.168.1.174/img/IM%C3%81GENES/Cards-section-2/Drones.png';
  card3Img4 =
    'http://192.168.1.174/img/IM%C3%81GENES/Cards-section-2/televisores.png';
  card4Img1 = 'http://192.168.1.174/img/IM%C3%81GENES/Cards-section-2/Maletas.png';
  card4Img2='http://192.168.1.174/img/IM%C3%81GENES/Cards-section-2/Mancuernas.png';
  card4Img3='http://192.168.1.174/img/IM%C3%81GENES/Cards-section-2/Ollas.png';
  card4Img4='http://192.168.1.174/img/IM%C3%81GENES/Cards-section-2/Patinetas.png';
  constructor() {}

  ngOnInit(): void {}
}
