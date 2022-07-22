import { Component, Input, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ImageArray, ImagesGallery } from './ArrayImagenes';

@Component({
  selector: 'app-imagen-products',
  templateUrl: './imagen-products.component.html',
  styleUrls: ['./imagen-products.component.css'],
})
export class ImagenProductsComponent implements OnInit {
  @Input('imagenArray') imagenArray: string = '';
  imgGrande = RepositorioImg.urlRepositorio;
  images: ImagesGallery[] = ImageArray;
  selectedIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  cambiarImg(i: number): void {
    //CAMBIAR IMAGEN SEGUN EVENTO CLICK
    this.selectedIndex = i;
    this.imagenArray = this.images[i].previewImageSrc;
  }
  //BAJAR ITEMS DEL ARREGLO
  downItems(): void {
    this.selectedIndex++;
    if (this.images.length < this.selectedIndex + 1) {
      //SI ES MENOR AL ARREGLO LO DEVUELVO AL PRINCIPIO
      this.selectedIndex = 0;
      this.imagenArray = this.images[this.selectedIndex].previewImageSrc;
    } else {
      //ASIGNO LA SIGUIENTE IMAGEN
      this.imagenArray = this.images[this.selectedIndex].previewImageSrc;
    }
  }
  //SUBIR ITEMS DEL ARREGLO
  upItems(): void {
    this.selectedIndex--;
    if (this.selectedIndex < 0) {
      //SI ES MENOR A 0 LO LLEVO A LA ULTIMA IMAGEN
      this.selectedIndex = 4;
      this.imagenArray = this.images[this.selectedIndex].previewImageSrc;
    } else {
      // ASIGNO A LA ANTERIOR IMAGEN
      this.imagenArray = this.images[this.selectedIndex].previewImageSrc;
    }
  }
}
