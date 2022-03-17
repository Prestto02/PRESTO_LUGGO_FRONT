import { Component, OnInit } from '@angular/core';
import { Menu2Component } from '../menu2/menu2.component';

@Component({
  selector: 'app-section-carousel',
  templateUrl: './section-carousel.component.html',
  styleUrls: ['./section-carousel.component.css'],
})
export class SectionCarouselComponent implements OnInit {
  banner1 =
    'http://192.168.1.174/img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Deportes.jpg';
  banner2 =
    'http://192.168.1.174/img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Diversión.jpg';
  banner3 =
    'http://192.168.1.174/img/banner-principales/LUGGO-banner-Producto-Oculus.jpg';
  banner4 =
    'http://192.168.1.174/img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Cocina.jpg';
  banner5 =
    'http://192.168.1.174/img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Cosméticos.jpg';
  banner6 =
    'http://192.168.1.174/img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Cuidado-Infantil.jpg';
  banner7 =
    'http://192.168.1.174/img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Hogar.jpg';
  banner8 =
    'http://192.168.1.174/img/banner-principales/LUGGO-Contenido-Febrero-2022-Propuesta-Banner-Categoria-Tecnología.jpg';
  card1 = '../../../../../assets/img/cards/Rectangle 117.png';
  card2Icon1 = '../../../../../assets/img/cards/Mask Group.png';
  card2Icon2 = '../../../../../assets/img/cards/Mask Group2.png';
  card2Icon3 = '../../../../../assets/img/cards/Mask Group3.png';
  card2Icon4 = '../../../../../assets/img/cards/Mask Group4.png';
  card4Img = '../../../../../assets/img/cards/Rectangle 129.png';
  constructor(public menu2: Menu2Component) {}

  ngOnInit(): void {}
}
