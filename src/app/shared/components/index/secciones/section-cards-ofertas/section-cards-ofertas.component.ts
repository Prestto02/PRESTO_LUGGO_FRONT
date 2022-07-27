import { Component, OnInit } from '@angular/core';
import { ModelsImgOfertas } from './arrayOfertasImagen';
import { BannersCardsOFertas } from './services/BannersCardsOfertas.service';

@Component({
  selector: 'app-section-cards-ofertas',
  templateUrl: './section-cards-ofertas.component.html',
  styleUrls: ['./section-cards-ofertas.component.css'],
})
export class SectionCardsOfertasComponent implements OnInit {
  arrayOfertasImg: ModelsImgOfertas[] = [];
  constructor(private apiBanerCards: BannersCardsOFertas) {}

  ngOnInit(): void {
    this.getSectionOfertas();
  }

  getSectionOfertas() {
    this.apiBanerCards.getElementsBannersOfertas().subscribe((res: ModelsImgOfertas[]) => {
      this.arrayOfertasImg = res;
    });
  }
}
