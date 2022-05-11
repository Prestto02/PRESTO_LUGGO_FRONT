import { Component, OnInit } from '@angular/core';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-img-iconos',
  templateUrl: './img-iconos.component.html',
  styleUrls: ['./img-iconos.component.css'],
})
export class ImgIconosComponent implements OnInit {
  imgListArray: any = [
    {
      id: 1,
      imgProductsIcons: '',
      fn: function (e: any) {
        this.imgProductsIcons = e[0].base64;
        console.log(this.imgProductsIcons);
      },
    },
    {
      id: 2,
      imgProductsIcons: '',
      fn: function (e: any) {
        this.imgProductsIcons = e[0].base64;
        console.log(this.imgProductsIcons);
      },
    },
    {
      id: 3,
      imgProductsIcons: '',
      fn: function (e: any) {
        this.imgProductsIcons = e[0].base64;
        console.log(this.imgProductsIcons);
      },
    },
    {
      id: 4,
      imgProductsIcons: '',
      fn: function (e: any) {
        this.imgProductsIcons = e[0].base64;
        console.log(this.imgProductsIcons);
      },
    },
  ];
  imgArrayTotal:any=[];
  constructor(
    private imgValidar: ValidarYTransformarImagen //VALIDAR IMAGENES Y TRANSFORMAR
  ) {}
  ngOnInit(): void {}
  //OBTENER IMAGEN PARA VERIFICAR EN EL SERVER
  getImage(e: any) {
    this.imgValidar.getImageVerifyServer(e); //VERIFICO EN EL SERVER LA IMAGEN
  }
  //DRAG AND DROP IMG LIST
  onDropped(e: CdkDragDrop<any>) {
    console.log(this.imgListArray);
    const anterior = e.previousIndex;
    const actual = e.currentIndex;
    moveItemInArray(this.imgListArray, anterior, actual);
  }
}
