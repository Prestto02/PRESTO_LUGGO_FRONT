import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-ofertas',
  templateUrl: './section-ofertas.component.html',
  styleUrls: ['./section-ofertas.component.css'],
})
export class SectionOfertasComponent implements OnInit {
  card1Img1 =
    'http://192.168.100.15/img/IM%C3%81GENES/Cards-section-1/San Valentin.jpg';
  card2Img1 =
    'http://192.168.100.15/img/IM%C3%81GENES/Cards-section-2/Audifonos.png';
  card3Img1 = '../../../../../assets/img/cards/image 15.png';
  card4Img1 = '../../../../../assets/img/cards/image 9.png';
  card5Img1 = '../../../../../assets/img/cards/image 14.png';
  card6Img1 = '../../../../../assets/img/cards/image 12.png';
  card7Img1 = '../../../../../assets/img/cards/image 16.png';

  constructor() {}

  ngOnInit(): void {}
}
