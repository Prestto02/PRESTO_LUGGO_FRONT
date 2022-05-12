import { Component, Input, OnInit } from '@angular/core';
import { NgxImgZoomService } from 'ngx-img-zoom';

@Component({
  selector: 'app-imagen-products',
  templateUrl: './imagen-products.component.html',
  styleUrls: ['./imagen-products.component.css'],
})
export class ImagenProductsComponent implements OnInit {
  @Input('imagenArray') imagenArray: any = [];
  imageRaton: string = '';
  imgGrande: string = '';
  enableZoom: boolean = true;
  styleResults =
    'background:#fff;width:500px; height:500px; background-repeat: no-repeat; z-index: 2; position:absolute;-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); top: 0;left: 450px;';

  constructor(private ngxImgZoom: NgxImgZoomService) {
    this.ngxImgZoom.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 },
    ]);
  }

  ngOnInit(): void {
    this.obtenerElarrayDeimagenes();
  }
  //OBTENER EL ARRAY DE LAS IMAGENES
  obtenerElarrayDeimagenes() {
    this.imagenArray.map((res: any) => {
      this.imageRaton = res.mediana[0];
      this.imgGrande = res.zoom[0];
      console.log(this.imageRaton);
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
