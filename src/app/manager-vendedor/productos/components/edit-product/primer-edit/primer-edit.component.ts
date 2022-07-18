import { Component, Input, OnInit } from '@angular/core';
import { BaseFormCategorias } from 'src/app/manager-vendedor/categorias/models/categorias.models';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';
import { BaseFormEtiquetas } from '../../create-products/form-etiquetas/models/BaseFormEtiquetas';
import { EditFormProducts } from '../model/FormEditProduct';
import { IProductEdit } from '../model/IProductEdit';

@Component({
  selector: 'app-primer-edit',
  templateUrl: './primer-edit.component.html',
  styleUrls: ['./primer-edit.component.css'],
})
export class PrimerEditComponent implements OnInit {
  imgProducts: string = '';
  @Input('idProduct') idProduct: any | null = null;
  @Input('productEdit') productEdit: any | null = null;
  imagenTransformada: string = '';
  ActiveGarantia: boolean = false;
  constructor(
    public formB: EditFormProducts, //EDIT FORM PRODUCTS
    private imgValidar: ValidarYTransformarImagen, //VALIDAR IMAGENES Y TRANSFORMAR
    private formCateogiras: BaseFormCategorias,
    private formEtiquetas: BaseFormEtiquetas
  ) {}

  ngOnInit(): void {
    this.getIdForm();
    this.setFormProduct();
  }
  //SETEANDO ID EN EL FORMULARIO
  getIdForm() {
    this.formB.formEditProducts.patchValue({
      id_product: this.idProduct,
    });
  }

  getImage(e: any) {
    this.imgValidar.getImageVerifyServer(e); //VERIFICO EN EL SERVER LA IMAGEN
  }
  //OBTENER LA IMAGEN PARA TRANSFORMARLA
  getArchive(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProducts = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
    this.asignForm();
  }

  //ASIGNARIMG FORM
  asignForm() {
    this.formB.formEditProducts.patchValue({
      multimedia: {
        archivo: this.imagenTransformada,
      },
      ArticuloTieneCategoria: this.formCateogiras.formCategorias.get(
        'ArticuloTieneCategoria'
      )?.value,
      etiqueta: this.formEtiquetas.formEtiquetas.get('etiqueta')?.value,
    });
  }
  submitCheck() {
    this.asignForm();
    const form: IProductEdit = this.formB.formEditProducts.value;
  }
  //SELECT CHANGE GARANTIA
  selectGarantia(e: any) {
    if (e.target.value === 'Si') {
      this.ActiveGarantia = true;
    } else if (e.target.value === 'No' || e.target.value === '') {
      this.ActiveGarantia = false;
    }
  }
  //GET CATEGORIAS
  setFormProduct() {
    setTimeout(() => {
      this.getFormData();
      this.getCategorias();
    }, 2000);
  }
  getCategorias() {
    this.productEdit.articuloTieneCategoria.map((res: any) => {
      this.formCateogiras.addCategoriasEdit(res.id, res.name);
    });
  }
  getFormData() {
    this.formB.setFormValue(this.productEdit);
  }
}

//OBTENER IMAGEN PARA VERIFICAR EN EL SERVER
//getAsignIDPRODUCTO FORM
/* getCategorias() {
     const categoriasArray: any = [
      {
        id: 8,
        nombre: 'Moda y Accesorios',
      },
      {
        id: 11,
        nombre: 'Hogar',
      },
    ];
    categoriasArray.map((res: any) => {
      this.formCateogiras.addCategoriasEdit(res.id, res.nombre);
    });
  }
  */
