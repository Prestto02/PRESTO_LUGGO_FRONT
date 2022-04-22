import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-cards-ofertas',
  templateUrl: './section-cards-ofertas.component.html',
  styleUrls: ['./section-cards-ofertas.component.css'],
})
export class SectionCardsOfertasComponent implements OnInit {
  imgOferta1 = 'http://192.168.100.15/img/banners-section-1/sb-tecnologia.jpg';
  imgOferta2 = 'http://192.168.100.15/img/banners-section-1/sb-audifonos.jpg';
  imgOferta3 = 'http://192.168.100.15/img/banners-section-1/sb-deportiva.jpg';
  imgOferta4 = 'http://192.168.100.15/img/banners-section-1/sb-cosmeticos.jpg';
  constructor() {}

  ngOnInit(): void {}
}
