import { Component, Input, OnInit } from '@angular/core';
/* import { NgxImgZoomService } from 'ngx-img-zoom'; */
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ImageArray } from './ArrayImagenes';

@Component({
  selector: 'app-imagen-products',
  templateUrl: './imagen-products.component.html',
  styleUrls: ['./imagen-products.component.css'],
})
export class ImagenProductsComponent implements OnInit {
  @Input('imagenArray') imagenArray: string = '';
  @Input('imagenZoom') imagenZoom: string = '';
  imgGrande = RepositorioImg.urlRepositorio;

  images: any = ImageArray;
  countArray: number = ImageArray.length;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '960px',
      numVisible: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
