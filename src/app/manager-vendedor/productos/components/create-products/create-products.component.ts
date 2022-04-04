import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { MessageFrontEndService } from 'src/app/shared/services/message-front-end.service';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
import { BaseFormProducts } from '../../models/BaseformProduct';
import { CategoriasService } from '../../services/categorias.service';
import { ProductsService } from '../../services/products.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css'],
})
export class CreateProductsComponent implements OnInit {
  imgProducts = '';
  imagenTransformada = '';
  error = '';
  activar = false;
  categoriasItems: any;
  listaEscodiga: any;
  constructor(
    private position: PositionUser, //POSICION DEl USUARIO
    public formB: BaseFormProducts, //FORM PRODUCTS
    private apiProducts: ProductsService, //SERVICES PRODUCTOS
    private apiCategoria: CategoriasService, //SERVICES CATEGORIAS
    private messageFront: MessageFrontEndService, //MENSAJES DE ERRORES
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser(); //OBTENGO LA POSICION DEL USUARIO
    this.getCategorias();
  }

  getArchive(e: any) {
    const buscar = ',';
    if (
      e[0].type === 'image/png' ||
      e[0].type === 'image/jpg' ||
      e[0].type === 'image/jpeg'
    ) {
      this.imgProducts = e[0].base64;
      const index = this.imgProducts.indexOf(buscar); //BUSCO LA , DEL BASE 64
      this.imagenTransformada = this.imgProducts.slice(index + 1); //ENCONTRADO LA POSICION DE LA , ENViARLA A LA API
      // this.verifiarImgFormat(e);
    } else {
      this.messageFront.getWarningMessage(
        message.Warning.title,
        message.Warning.imagenes
      );
    }
  }
  //OBTENGO LA IMAGEN PARA ENVIARLO POR EL FORM-DATA
  getImage(e: any) {
    const file = e.target.files[0]; //LA POSICION TARGET DE LA IMAGEN
    const formData = new FormData(); //CREO EL FORM DATA PARA ENVIARLO AL SERVIDOR
    formData.append('files', file); //ASIGNO A LA VARIABLE FILES LO QUE TENGO EN EL TARGET
    this.apiProducts.postVerifyImg(formData).subscribe(
      //HAGO LA PETICION
      (res) => {
        console.log(res);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
  //TRAIGO LAS CATEGORIAS
  getCategorias() {
    this.apiCategoria.getAllCategorias().subscribe((res) => {
      this.categoriasItems = res;
    });
  }
  //TOMAR EL FORMARRAY
  get arrayCategoria(): FormArray {
    return this.formB.formProducts.get('idcategoria_articulo') as FormArray; //OBTENGO EL FORMULARIO CON EL ARRAY
  }
  //ADD NEW CATEGORI IN THE ARRAY
  addCategoria() {
    this.arrayCategoria.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(10),
      ])
    );
  }

  //ENVIAR FORMULARIO
  submit() {
    this.formB.formProducts.patchValue({ archivo: this.imagenTransformada });
    const dataForm = this.formB.getDataForm(
      this.position.latitud,
      this.position.longitud
    );
    this.apiProducts.postDataArticulo(dataForm).subscribe((res) => {
      console.log(res);
    });
    console.log(dataForm);
  }
}
