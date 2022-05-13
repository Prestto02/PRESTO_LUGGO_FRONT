import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-section-cards-ofertas',
  templateUrl: './section-cards-ofertas.component.html',
  styleUrls: ['./section-cards-ofertas.component.css'],
})
export class SectionCardsOfertasComponent implements OnInit {
  imgOferta1 = `${RepositorioImg.urlRepositorio}img/banners-section-1/sb-tecnologia.jpg`;
  imgOferta2 = `${RepositorioImg.urlRepositorio}img/banners-section-1/sb-audifonos.jpg`;
  imgOferta3 = `${RepositorioImg.urlRepositorio}img/banners-section-1/sb-deportiva.jpg`;
  imgOferta4 = `${RepositorioImg.urlRepositorio}img/banners-section-1/sb-cosmeticos.jpg`;
  constructor() {}

  ngOnInit(): void {}
}
