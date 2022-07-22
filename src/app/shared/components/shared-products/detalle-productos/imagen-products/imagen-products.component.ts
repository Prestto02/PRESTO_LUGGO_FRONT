import { Component, Input, OnInit } from '@angular/core';
/* import { NgxImgZoomService } from 'ngx-img-zoom'; */
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ImageArray, ImagesGallery } from './ArrayImagenes';

@Component({
  selector: 'app-imagen-products',
  templateUrl: './imagen-products.component.html',
  styleUrls: ['./imagen-products.component.css'],
})
export class ImagenProductsComponent implements OnInit {
  @Input('imagenArray') imagenArray: string =
    '' || 'https://fondosmil.com/fondo/17010.jpg';
  @Input('imagenZoom') imagenZoom: string = '';
  imgGrande = RepositorioImg.urlRepositorio;
  images: ImagesGallery[] = ImageArray;
  countArray: number = ImageArray.length;
  selectedIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}

  cambiarImg(i: number): void {
    this.selectedIndex = i;
    this.imagenArray = this.images[i].previewImageSrc;
  }
  downItems(): void {
    this.selectedIndex++;
    if (this.images.length < this.selectedIndex+1) {
      this.selectedIndex = 0;
      this.imagenArray = this.images[this.selectedIndex].previewImageSrc;
    } else {
      this.imagenArray = this.images[this.selectedIndex].previewImageSrc;
    }
  }
  upItems(): void {
    this.selectedIndex--;
    if (this.selectedIndex < 0) {
      this.selectedIndex = 4;
      this.imagenArray = this.images[this.selectedIndex].previewImageSrc;
    } else {
      this.imagenArray = this.images[this.selectedIndex].previewImageSrc;
    }
    /* if(this.selectedIndex!==0) */
  }
}
