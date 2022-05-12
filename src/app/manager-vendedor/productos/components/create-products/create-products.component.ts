import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { BaseFormProducts } from '../../models/BaseformProduct';
import { BaseFormCategorias } from 'src/app/manager-vendedor/categorias/models/categorias.models';
import { EditRegisterModalService } from 'src/app/shared/components/modals/services/edit-register-modal.service';
import { BaseFormEtiquetas } from './form-etiquetas/models/BaseFormEtiquetas';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css'],
})
export class CreateProductsComponent implements OnInit {
  activar = false;
  categoriasItems: any;
  marcaItems: any = [];
  constructor(
    private position: PositionUser, //POSICION DEl USUARIO
    public formB: BaseFormProducts, //FORM PRODUCTS
    public formCategoria: BaseFormCategorias, //FORM CATEGORIAS
    private serviModal: EditRegisterModalService, //SERVICES MODAL
    public formEtiqueta: BaseFormEtiquetas, //BASE FORM ETIQUETAS
    private apiMarca: MarcaService //API MARCA
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser(); //OBTENGO LA POSICION DEL USUARIO
    this.getEditOrRegister(); //CAMBIAR ESTADO DEL BOTON DE REGISTRO O EDITAR
    this.getAllMarcas();
  }
  //SERVICES MODALS
  getEditOrRegister() {
    this.serviModal.registerOrEditBandera.subscribe((res) => {
      this.activar = res; //OBTENGO SI ES VERDADERO O FALSO PARA CAMBIAR EL ESTADO DEL BOTON
    });
  }
  //GET ALL MARCAS
  getAllMarcas() {
    this.apiMarca.getAllMarca().subscribe((res) => {

      this.marcaItems = res;
    });
  }
  //ENVIAR FORMULARIO
  submit() {
    /*     this.load = true;
   const dataForm = this.formB.getDataForm(
      this.position.latitud,
      this.position.longitud,
      this.formCategoria.getFormData() //OBTENGO LOS ID DE LAS CATEGORIAS
    );
    console.log(dataForm); */
    /* this.apiProducts.postDataArticulo(dataForm).subscribe((res) => {
      console.log(res);
      this.formB.limpiarForm();
      this.load=false;
    }); */
  }
}
