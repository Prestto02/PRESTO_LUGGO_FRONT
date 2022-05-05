import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { BaseFormProducts } from '../../models/BaseformProduct';
import { BaseFormCategorias } from 'src/app/manager-vendedor/categorias/models/categorias.models';
import { EditRegisterModalService } from 'src/app/shared/components/modals/services/edit-register-modal.service';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css'],
})
export class CreateProductsComponent implements OnInit {
  imgProducts = '';
  imagenTransformada = '';
  error: any;
  activar = false;
  categoriasItems: any;
  load: boolean = false;
  progressBar: boolean = false;
  constructor(
    private position: PositionUser, //POSICION DEl USUARIO
    public formB: BaseFormProducts, //FORM PRODUCTS
    private validateImg: ValidarYTransformarImagen, //VALIDAR IMAGENES
    private formCategoria: BaseFormCategorias, //FORM CATEGORIAS
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
    const { imagenTransformada, imgProducts } =
      this.validateImg.getArchiveImagen(e);
    this.imagenTransformada = imagenTransformada;
    this.imgProducts = imgProducts;
  }
  //OBTENGO LA IMAGEN PARA ENVIARLO POR EL FORM-DATA
  getImage(e: any) {
    this.error = this.validateImg.getImageVerifyServer(e);
  }
  //ENVIAR FORMULARIO
  submit() {
    this.load = true;
    this.formB.formProducts.patchValue({ archivo: this.imagenTransformada });
    const dataForm = this.formB.getDataForm(
      this.position.latitud,
      this.position.longitud,
      this.formCategoria.getFormData() //OBTENGO LOS ID DE LAS CATEGORIAS
    );
    console.log(dataForm);
    /* this.apiProducts.postDataArticulo(dataForm).subscribe((res) => {
      console.log(res);
      this.formB.limpiarForm();
      this.load=false;
    }); */
  }
  subirProgress() {
    this.progressBar = !this.progressBar;
  }
}
