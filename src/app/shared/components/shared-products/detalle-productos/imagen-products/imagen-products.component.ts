import { Component, Input, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ImagesGallery } from './ArrayImagenes';

@Component({
  selector: 'app-imagen-products',
  templateUrl: './imagen-products.component.html',
  styleUrls: ['./imagen-products.component.css'],
})
export class ImagenProductsComponent implements OnInit {
  @Input('imagenArray') imagenArray: string = '';
  @Input('multimedia') multimedia: ImagesGallery[] = [];
  imgRuta = RepositorioImg.urlRepositorio; //URL REPOSITORIO
  selectedIndex: number = 0; //SELECTED INDEX
  presentGallery: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  cambiarImg(i: number): void {
    //CAMBIAR IMAGEN SEGUN EVENTO CLICK
    this.selectedIndex = i;
    this.imagenArray = this.multimedia[i].url_multimediaFULHD;
  }
  //BAJAR ITEMS DEL ARREGLO
  downItems(): void {
    this.selectedIndex++;
    if (this.multimedia.length < this.selectedIndex + 1) {
      //SI ES MENOR AL ARREGLO LO DEVUELVO AL PRINCIPIO
      this.selectedIndex = 0;
      this.imagenArray =
        this.multimedia[this.selectedIndex].url_multimediaFULHD;
    } else {
      //ASIGNO LA SIGUIENTE IMAGEN
      this.imagenArray =
        this.multimedia[this.selectedIndex].url_multimediaFULHD;
    }
  }
  //SUBIR ITEMS DEL ARREGLO
  upItems(): void {
    this.selectedIndex--;
    if (this.selectedIndex < 0) {
      //SI ES MENOR A 0 LO LLEVO A LA ULTIMA IMAGEN
      this.selectedIndex = 4;
      this.imagenArray =
        this.multimedia[this.selectedIndex].url_multimediaFULHD;
    } else {
      // ASIGNO A LA ANTERIOR IMAGEN
      this.imagenArray =
        this.multimedia[this.selectedIndex].url_multimediaFULHD;
    }
  }
}
