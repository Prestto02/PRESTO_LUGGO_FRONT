import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseFormCategorias } from 'src/app/manager-vendedor/categorias/models/categorias.models';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';
import { BaseFormEtiquetas } from '../../create-products/form-etiquetas/models/BaseFormEtiquetas';
import { EditFormProducts } from '../model/FormEditProduct';

@Component({
  selector: 'app-primer-edit',
  templateUrl: './primer-edit.component.html',
  styleUrls: ['./primer-edit.component.css'],
})
export class PrimerEditComponent implements OnInit {
  imgProducts: string = '';
  idProduct: any;
  imagenTransformada: string = '';
  ActiveGarantia: boolean = false;
  constructor(
    public formB: EditFormProducts, //EDIT FORM PRODUCTS
    private Arouter: ActivatedRoute,
    private imgValidar: ValidarYTransformarImagen //VALIDAR IMAGENES Y TRANSFORMAR
  ) {
    this.idProduct = this.idProduct = this.Arouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getIdForm();
  }
  //OBTENER IMAGEN PARA VERIFICAR EN EL SERVER
  //getAsignIDPRODUCTO FORM
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
    this.asignImgForm();
  }

  //ASIGNARIMG FORM
  asignImgForm() {
    this.formB.formEditProducts.patchValue({
      multimedia: {
        archivo: this.imagenTransformada,
      },
    });
  }

  //SELECT CHANGE GARANTIA
  selectGarantia(e: any) {
    if (e.target.value === 'Si') {
      this.ActiveGarantia = true;
    } else if (e.target.value === 'No' || e.target.value === '') {
      this.ActiveGarantia = false;
    }
  }
}
