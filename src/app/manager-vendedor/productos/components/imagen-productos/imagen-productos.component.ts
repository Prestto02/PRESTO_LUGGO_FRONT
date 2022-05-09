import { Component, OnInit } from '@angular/core';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';

@Component({
  selector: 'app-imagen-productos',
  templateUrl: './imagen-productos.component.html',
  styleUrls: ['./imagen-productos.component.css'],
})
export class ImagenProductosComponent implements OnInit {
  imgProducts = '';
  imagenTransformada = '';
  constructor(
    private imgValidar: ValidarYTransformarImagen //VALIDAR IMAGENES Y TRANSFORMAR
  ) {}

  ngOnInit(): void {}
  //OBTENER LA IMAGEN PARA TRANSFORMARLA
  getArchive(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProducts = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
  }
  //OBTENER IMAGEN PARA VERIFICAR EN EL SERVER
  getImage(e: any) {
    this.imgValidar.getImageVerifyServer(e); //VERIFICO EN EL SERVER LA IMAGEN
  }
}
