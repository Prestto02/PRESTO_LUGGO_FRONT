import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { MessageFrontEndService } from 'src/app/shared/services/message-front-end.service';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
import { BaseFormProducts } from '../../models/BaseformProduct';
import { ProductsService } from '../../services/products.service';
import { BaseFormCategorias } from 'src/app/manager-vendedor/categorias/models/categorias.models';
import { EditRegisterModalService } from 'src/app/shared/components/modals/services/edit-register-modal.service';

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
  constructor(
    private position: PositionUser, //POSICION DEl USUARIO
    public formB: BaseFormProducts, //FORM PRODUCTS
    private apiProducts: ProductsService, //SERVICES PRODUCTOS
    private formCategoria: BaseFormCategorias, //FORM CATEGORIAS
    private messageFront: MessageFrontEndService, //MENSAJES DE ERRORES
    private serviModal: EditRegisterModalService //SERVICES MODAL
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser(); //OBTENGO LA POSICION DEL USUARIO
    this.getEditOrRegister(); //CAMBIAR ESTADO DEL BOTON DE REGISTRO O EDITAR
  }
  //SERVICES MODALS
  getEditOrRegister() {
    this.serviModal.registerOrEditBandera.subscribe((res) => {
      this.activar = res; //OBTENGO SI ES VERDADERO O FALSO PARA CAMBIAR EL ESTADO DEL BOTON
    });
  }
  //VERIFICADOR DE ARCHIVOS
  getArchive(e: any) {
    const buscar = ',';
    if (
      e[0].type === 'image/png' ||
      e[0].type === 'image/jpg' ||
      e[0].type === 'image/jpeg'
    ) {
      //VALIDO SI LA IMAGEN ES DE ESE FORMATO
      this.imgProducts = e[0].base64; //OBTENGO DEL ARRAY LA BASE 64
      const index = this.imgProducts.indexOf(buscar); //BUSCO LA , DEL BASE 64
      this.imagenTransformada = this.imgProducts.slice(index + 1); //ENCONTRADO LA POSICION DE LA , ENViARLA A LA API
      // this.verifiarImgFormat(e);
    } else {
      this.messageFront.getWarningMessage(
        message.Warning.title,
        message.Warning.imagenes
      ); //MENSAJE TOAST
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
  //ENVIAR FORMULARIO
  submit() {
    this.formB.formProducts.patchValue({ archivo: this.imagenTransformada });
    const dataForm = this.formB.getDataForm(
      this.position.latitud,
      this.position.longitud,
      this.formCategoria.getDataFormCateogoria()
    );
    this.apiProducts.postDataArticulo(dataForm).subscribe((res) => {
      console.log(res);
      this.formB.limpiarForm();
    });
  }
}
