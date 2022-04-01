import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { MessageFrontEndService } from 'src/app/shared/services/message-front-end.service';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
import { BaseFormProducts } from '../../models/BaseformProduct';
import { CategoriasService } from '../../services/categorias.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css'],
})
export class CreateProductsComponent implements OnInit {
  imgProducts = '';
  imagenTransformada = '';
  activar = false;
  categoriasItems: any;
  listaEscodiga: any;
  constructor(
    private position: PositionUser, //POSICION DEl USUARIO
    public formB: BaseFormProducts, //FORM PRODUCTS
    private apiService: ProductsService, //SERVICES PRODUCTOS
    private apiCategoria: CategoriasService, //SERVICES CATEGORIAS
    private messageFront: MessageFrontEndService //MENSAJES DE ERRORES
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser(); //OBTENGO LA POSICION DEL USUARIO
    this.getCategorias();
  }
  //OBTENGO EL ARCHIVO IMAGEN Y LO TRANSFOMO
  getArchive(e: any) {
    const buscar = ',';
    if (
      e[0].type === 'image/png' ||
      e[0].type === 'image/jpg' ||
      e[0].type === 'image/jpeg'
    ) {
      this.imgProducts = e[0].base64;
      const index = this.imgProducts.indexOf(buscar); //BUSCO LA , DEL BASe 64
      this.imagenTransformada = this.imgProducts.slice(index + 1); //ENCONTRADO LA POSICION DE LA , ENViARLA A LA API
    } else {
      this.messageFront.getWarningMessage(
        message.Warning.title,
        message.Warning.imagenes
      );
    }
  }
  //Validar Imagen
  validarImagen(type: any) {}
  //TRAIGO LAS CATEGORIAS
  getCategorias() {
    this.apiCategoria.getAllCategorias().subscribe((res) => {
      this.categoriasItems = res;
    });
  }
  //ENVIAR FORMULARIO
  submit() {
    this.formB.formProducts.patchValue({ archivo: this.imagenTransformada });
    const dataForm = this.formB.getDataForm(
      this.position.latitud,
      this.position.longitud
    );
    this.apiService.postDataArticulo(dataForm).subscribe((res) => {
      console.log(res);
    });
    console.log(dataForm);
  }
  buscar() {
    this.categoriasItems;
  }
  //SELECIONADO
  seleccionar(id: any) {
    console.log('me distes click', id);
  }
  eliminar() {}
}
