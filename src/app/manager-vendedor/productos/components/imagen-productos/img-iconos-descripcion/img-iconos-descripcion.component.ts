import { Component, OnInit } from '@angular/core';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';

@Component({
  selector: 'app-img-iconos-descripcion',
  templateUrl: './img-iconos-descripcion.component.html',
  styleUrls: ['./img-iconos-descripcion.component.css'],
})
export class ImgIconosDescripcionComponent implements OnInit {
  imgProductsDescripcion1 = '';
  imgProductsDescripcion2 = '';
  imgProductsDescripcion3 = '';

  imagenTransformada = '';
  constructor(
    private imgValidar: ValidarYTransformarImagen //VALIDAR IMAGENES Y TRANSFORMAR
  ) {}

  ngOnInit(): void {}
  //OBTENER LA IMAGEN PARA TRANSFORMARLA
  getArchiveDescripcion1(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProductsDescripcion1 = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
  }
  //GET ARCHIVE 2
  getArchiveDescripcion2(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProductsDescripcion2 = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
  }
  //GET ARCHIVE 3
  getArchiveDescripcion3(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProductsDescripcion3 = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
  }
  //OBTENER IMAGEN PARA VERIFICAR EN EL SERVER
  getImage(e: any) {
    this.imgValidar.getImageVerifyServer(e); //VERIFICO EN EL SERVER LA IMAGEN
  }
}
