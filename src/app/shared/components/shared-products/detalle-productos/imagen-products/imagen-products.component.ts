import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-products',
  templateUrl: './imagen-products.component.html',
  styleUrls: ['./imagen-products.component.css'],
})
export class ImagenProductsComponent implements OnInit {
  @Input('imagenArray') imagenArray: any = [];
  imageRaton: string = '';
  imgGrande: string = '';

  constructor() {}

  ngOnInit(): void {
    this.obtenerElarrayDeimagenes();
  }
  //OBTENER EL ARRAY DE LAS IMAGENES
  obtenerElarrayDeimagenes() {
    this.imagenArray.map((res: any) => {
      this.imageRaton = res.mediana[0];
      this.imgGrande = res.zoom[0];
    });
  } //BUSCAR QUE IMAGEN DEL ZOOM SE APARECE DEPENDE DEL INDICE
  buscarImagenZoomdelArray(array: any, i: any) {
    array.map((res: any, index: any) => {
      if (index === i) {
        this.imgGrande = res; //ASIGNO LO ENCONTRADO EN LA VARIABLE
      }
    });
  }
  //BUSCAR QUE IMAGEN DEL ZOOM SE APARECE DEPENDE DEL INDICE
  buscarImagendelArray(array: any, i: any) {
    array.map((res: any, index: any) => {
      if (index === i) {
        this.imageRaton = res; //ASIGNO LO ENCONTRADO EN LA VARIABLE
      }
    });
  }
  //PASO POR LA IMAGEN
  mouseCambioImg(i: any) {
    this.imagenArray.map((res: any) => {
      this.buscarImagendelArray(res.mediana, i); //MANDO A BUSCAR
      this.buscarImagenZoomdelArray(res.zoom, i); //MANDO A BUSCAR
    });
  }

}
