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
  obtenerElarrayDeimagenes() {
    this.imagenArray.map((res: any) => {
      this.imageRaton = res.mediana[0];
      this.imgGrande = res.zoom[0];
    });
  }
  buscarImagenZoomdelArray(array: any, i: any) {
    array.map((res: any, index: any) => {
      if (index === i) {
        this.imgGrande = res;
      }
    });
  }
  buscarImagendelArray(array: any, i: any) {
    array.map((res: any, index: any) => {
      if (index === i) {
        this.imageRaton = res;
      }
    });
  }
  //PASO POR LA IMAGEN
  mouseCambioImg(i: any) {
    this.imagenArray.map((res: any) => {
      this.buscarImagendelArray(res.mediana, i);
      this.buscarImagenZoomdelArray(res.zoom, i);
    });
  }
}
