import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';
import { ImgGalleryForm } from './models/ImgGallery';

@Component({
  selector: 'app-img-gallery-products',
  templateUrl: './img-gallery-products.component.html',
  styleUrls: ['./img-gallery-products.component.css'],
})
export class ImgGalleryProductsComponent implements OnInit, OnDestroy {
  @Input('detalleArticulo') detalleArticulo: any | null = null;
  imgProducts: string = '';
  imagenTransformada: string = '';
  constructor(
    public formGallery: ImgGalleryForm,
    private imgValidar: ValidarYTransformarImagen //VALIDAR IMAGENES Y TRANSFORMAR
  ) {}
  ngOnInit(): void {
    this.formGallery.limpiarFormularioString();
    this.setImgArray();
  }
  ngOnDestroy(): void {}

  setImgArray(): void {
    setTimeout(() => {
      this.obtenerImagenesEdit();
    }, 1000);
  }
  //SETEANDO NUEVAS IMAGENES GUARDADAS
  obtenerImagenesEdit(): void {
    this.detalleArticulo.detalleArticulo[0].multimedia.map(
      (res: any, i: number) => {
        console.log(res);
        this.formGallery.addGalleryProducts(
          res.archivo,
          i,
          res.url_multimediaFULHD,
          res.id_repositorio
        );
      }
    );
  }
  //OBTENER IMAGEN PARA VERIFICAR EN EL SERVER
  getImage(e: any) {
    this.imgValidar.getImageVerifyServer(e); //VERIFICO EN EL SERVER LA IMAGEN
  }
  //OBTENER LA IMAGEN PARA TRANSFORMARLA
  getArchive(e: any, i: number) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProducts = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
    this.formGallery.addGalleryProducts(
      this.imagenTransformada,
      i,
      this.imgProducts
    );
  }
}
