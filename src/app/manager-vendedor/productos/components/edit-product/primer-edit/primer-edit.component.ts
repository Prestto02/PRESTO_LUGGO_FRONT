import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BaseFormCategorias } from 'src/app/manager-vendedor/categorias/models/categorias.models';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';
import { BaseFormEtiquetas } from '../../create-products/form-etiquetas/models/BaseFormEtiquetas';
import { EditFormProducts } from '../model/FormEditProduct';
import { IProductEdit } from '../model/IProductEdit';

@Component({
  selector: 'app-primer-edit',
  templateUrl: './primer-edit.component.html',
  styleUrls: ['./primer-edit.component.css'],
})
export class PrimerEditComponent implements OnInit, OnChanges {
  imgProducts: string = '';
  @Input('idProduct') idProduct: any | null = null;
  @Input('productEdit') productEdit: any | null = null;
  imagenTransformada: string = '';
  ActiveGarantia: boolean = false;
  date = new Date();
  constructor(
    public formB: EditFormProducts, //EDIT FORM PRODUCTS
    private imgValidar: ValidarYTransformarImagen, //VALIDAR IMAGENES Y TRANSFORMAR
    private formCateogiras: BaseFormCategorias,
    private formEtiquetas: BaseFormEtiquetas
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.productEdit.currentValue != changes.productEdit.previousValue) {
      this.productEdit = changes.productEdit.currentValue;
      this.setFormProduct();
    }
  }

  ngOnInit(): void {
    //this.setFormProduct();
  }
  //SETEANDO ID EN EL FORMULARIO
  getIdForm() {
    this.formB.formEditProducts.patchValue({
      id_product: this.idProduct,
    });
  }
  getImageEdit() {
    this.imgProducts = `${RepositorioImg.urlRepositorio}${this.productEdit.multimedia.url_multimediaFULHD}?${this.date}`;
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
        archivo: this.imagenTransformada
          ? this.imagenTransformada
          : this.productEdit.multimedia.archivo,
      },
      ArticuloTieneCategoria: this.formCateogiras.formCategorias.get(
        'ArticuloTieneCategoria'
      )?.value,
      etiqueta: this.formEtiquetas.formEtiquetas.get('etiqueta')?.value,
    });
  }
  //SUBMIT CHECK
  /*   submitCheck() {
    this.asignForm();
    const form: IProductEdit = this.formB.formEditProducts.value;
  } */
  //VERIFY GARANTIA DE USUARIO
  selectTrueGarantia() {
    const dato = this.formB.formEditProducts.get('Garantia')?.value;
    if (dato === 'Si') this.ActiveGarantia = true;
    if (dato === 'No' || dato === '') this.ActiveGarantia = false;
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
    this.getIdForm();
    this.getImageEdit();
    this.asignForm();
    this.getFormData();
    this.getCategorias();
    this.getEtiquetas();
    this.selectTrueGarantia();
  }
  //SETEAR CATEGORIAS EN EL ARREGLO
  getCategorias() {
    this.productEdit.articuloTieneCategoria.map((res: any) => {
      this.formCateogiras.addCategoriasEdit(res.id, res.name);
    });
  }
  //SETEAR ETIQUETAS EN EL ARREGLo
  getEtiquetas() {
    this.productEdit.etiquetas.map((res: any) => {
      this.formEtiquetas.addEtiquetas(res.nombre);
    });
  }
  //SETEAR LOS PRODUCTOS EDITABLE AL FORMULARIO
  getFormData() {
    this.formB.setFormValue(this.productEdit);
  }
}
