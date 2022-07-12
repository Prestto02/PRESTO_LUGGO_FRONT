import { Component, Input, OnInit } from '@angular/core';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BaseFormConfigAtributos } from '../../configuracion-producto/configuracion-atributos/models/BaseFormConfigAtributos';
@Component({
  selector: 'app-img-iconos',
  templateUrl: './img-iconos.component.html',
  styleUrls: ['./img-iconos.component.css'],
})
export class ImgIconosComponent implements OnInit {
  @Input('position') position: number | null = null; //POSITION DEL ARREGLO DE CONFIG ATRIBUTOS
  imgListArray: any = [
    {
      id: 1,
      imgProductsIcons: '',
      imgProductTransform: '',
    },
    {
      id: 2,
      imgProductsIcons: '',
      imgProductTransform: '',
    },
    {
      id: 3,
      imgProductsIcons: '',
      imgProductTransform: '',
    },
    {
      id: 4,
      imgProductsIcons: '',
      imgProductTransform: '',
    },
  ];
  constructor(
    private imgValidar: ValidarYTransformarImagen, //VALIDAR IMAGENES Y TRANSFORMAR
    private imgForm: BaseFormConfigAtributos //FORM CONFIG ATRIBUTOS
  ) {}
  ngOnInit(): void {}
  //OBTENER IMAGEN PARA VERIFICAR EN EL SERVER
  getImage(e: any) {
    this.imgValidar.getImageVerifyServer(e); //VERIFICO EN EL SERVER LA IMAGEN
  }
  //OBTENR EL ARCHIVO PARA TRANSFORMARLO
  dataField(e: any, id: any, i: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e);
    const data = this.buscarImagenId(id);
    data[0].imgProductsIcons = imgProducts;
    data[0].imgProductTransform = imagenTransformada;
    this.imgForm.addImagenes(id, imgProducts, imagenTransformada, i); //AGREGO A MI ARREGLO DE IMAGENES LAS IMAGENES INSERTADAS
  }
  //DRAG AND DROP IMG LIST
  onDropped(e: CdkDragDrop<any>) {
    const anterior = e.previousIndex;
    const actual = e.currentIndex;
    moveItemInArray(this.imgListArray, anterior, actual);
  }

  //BUSCAR IMAGEN POR ID
  buscarImagenId(id: any) {
    return this.imgListArray
      .filter((elements: any) => elements.id === id)
      .map((res: any) => {
        return res;
      });
  }
}
