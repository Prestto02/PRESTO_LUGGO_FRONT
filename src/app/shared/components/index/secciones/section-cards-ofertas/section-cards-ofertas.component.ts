import { Component, OnInit } from '@angular/core';
import { arrayOfertasImg } from './arrayOfertasImagen';

@Component({
  selector: 'app-section-cards-ofertas',
  templateUrl: './section-cards-ofertas.component.html',
  styleUrls: ['./section-cards-ofertas.component.css'],
})
export class SectionCardsOfertasComponent implements OnInit {
  arrayOfertasImg = arrayOfertasImg;
  constructor() {}

  ngOnInit(): void {}
}
