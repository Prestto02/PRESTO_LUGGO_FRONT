import { Component, OnInit } from '@angular/core';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';

@Component({
  selector: 'app-img-iconos',
  templateUrl: './img-iconos.component.html',
  styleUrls: ['./img-iconos.component.css'],
})
export class ImgIconosComponent implements OnInit {
  imgProductsIcons1 = '';
  imgProductsIcons2 = '';
  imgProductsIcons3 = '';
  imgProductsIcons4 = '';
  imagenTransformada = '';
  constructor(
    private imgValidar: ValidarYTransformarImagen //VALIDAR IMAGENES Y TRANSFORMAR
  ) {}

  ngOnInit(): void {}
  //OBTENER LA IMAGEN PARA TRANSFORMARLA
  getArchive1(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProductsIcons1 = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
  }
  //IMG 2
  getArchive2(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProductsIcons2 = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
  }
  //IMG 3
  getArchive3(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProductsIcons3 = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
  }
  //IMG 4
  getArchive4(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProductsIcons4 = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
  }
  //OBTENER IMAGEN PARA VERIFICAR EN EL SERVER
  getImage(e: any) {
    this.imgValidar.getImageVerifyServer(e); //VERIFICO EN EL SERVER LA IMAGEN
  }
}
