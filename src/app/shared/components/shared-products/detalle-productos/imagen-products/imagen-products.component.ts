import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgxImgZoomService } from 'ngx-img-zoom';
/* import { NgxImgZoomService } from 'ngx-img-zoom'; */
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-imagen-products',
  templateUrl: './imagen-products.component.html',
  styleUrls: ['./imagen-products.component.css'],
})
export class ImagenProductsComponent implements OnInit {
  @Input('imagenArray') imagenArray: string = '';
  @Input('imagenZoom') imagenZoom: string = '';
  imgGrande = RepositorioImg.urlRepositorio;
  urlImgZoom: string = '';
  enableZoom: boolean = true;
  styleResults =
    'background:#fff;width:500px; height:500px; background-repeat: no-repeat; z-index: 2; position:absolute;-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); top: 0;left: 550px;';

  constructor(private ngxImgZoom: NgxImgZoomService) {
    this.ngxImgZoom.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 },
    ]);
  }

  ngOnInit(): void {}
}
