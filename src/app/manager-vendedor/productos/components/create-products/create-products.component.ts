import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { BaseFormProducts } from '../../models/BaseformProduct';
import { BaseFormCategorias } from 'src/app/manager-vendedor/categorias/models/categorias.models';
import { EditRegisterModalService } from 'src/app/shared/components/modals/services/edit-register-modal.service';
import { BaseFormEtiquetas } from './form-etiquetas/models/BaseFormEtiquetas';
import { MarcaService } from '../../services/marca.service';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { DataFormProducts } from '../../helpers/DataFormProducts';
import { ProductsService } from '../../services/products.service';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';
import { SearchProductsService } from '../../services/searchProducts.service';
import { ListadoProductosComponent } from '../listado-productos/listado-productos.component';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css'],
})
export class CreateProductsComponent implements OnInit {
  activar = false;
  categoriasItems: any;
  marcaItems: any = [];
  searchProductName: any = [];
  imgProducts = '';
  imagenTransformada = '';
  ocultar: boolean = true; //OCULTO LA LISTA DE MARCA
  ActiveGarantia: boolean = false; //OCULTAR LA GARANTIA
  touched: boolean = true;
  constructor(
    private position: PositionUser, //POSICION DEl USUARIO
    public formB: BaseFormProducts, //FORM PRODUCTS
    public formCategoria: BaseFormCategorias, //FORM CATEGORIAS
    private serviModal: EditRegisterModalService, //SERVICES MODAL
    public formEtiqueta: BaseFormEtiquetas, //BASE FORM ETIQUETAS
    private apiMarca: MarcaService, //API MARCA
    private apiProductServi: ProductsService,
    private apiSearchProduct: SearchProductsService,
    private router: Router, //ROUTER
    private dateApi: DataFormProducts,
    private imgValidar: ValidarYTransformarImagen //VALIDAR IMAGENES Y TRANSFORMAR
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser(); //OBTENGO LA POSICION DEL USUARIO
    this.getEditOrRegister(); //CAMBIAR ESTADO DEL BOTON DE REGISTRO O EDITAR
    this.getAllMarcas();
    this.getDataSearchProduct();
  }
  //API SEARCH PRODUCT
  getDataSearchProduct() {
    this.apiSearchProduct.listProduct.subscribe((res) => {
      this.searchProductName = res;
    });
    this.searchProductName = [];
  }
  //GUARDAR ID DE PRODUCTO SI LO ENCUENTRA
  guardarIdProductoNombre(id: any, nombre: any) {
    this.formB.formProducts.patchValue({
      id_nombre_articulo: id,
      nombre_articulo: nombre,
    });
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
  //REGRESAR AL PRODUCTO
  irProducto() {
    this.router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`
    );
  }
  addAtributos() {
    this.dateApi.getAtributosImagenes();
  }
  //CREAR NUEVO NOMBRE DE ARTICULO
  crearNuevoNombreArticulo() {
    const nombre = this.formB.formProducts.get('nombre_articulo')?.value;
    const form = {
      nombre_articulo: nombre,
      latitud: this.position.latitud,
      longitud: this.position.longitud,
    };
    this.apiProductServi.postNewArticuloNombre(form).subscribe((res) => {
      this.formB.formProducts.patchValue({
        id_nombre_articulo: res,
        archivo: this.imagenTransformada,
      });
    });
  }
  //OBTENER IMAGEN PARA VERIFICAR EN EL SERVER
  getImage(e: any) {
    this.imgValidar.getImageVerifyServer(e); //VERIFICO EN EL SERVER LA IMAGEN
  }
  //OBTENER LA IMAGEN PARA TRANSFORMARLA
  getArchive(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProducts = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
    this.formB.formProducts.patchValue({
      archivo: this.imagenTransformada,
    });
  }
  //SETEO LAS MARCAS EN EL FORMULARIO DE PRODUCTOS
  setMarcasFormProducts(id: any, nombre: any) {
    this.formB.formProducts.patchValue({
      id_marca: id,
      marca: nombre,
    }); //SETEO LA MARCA SEGUN LA OPCION ELEGIDA POR EL USUAIRO
    this.ocultar = true;
  }
  //ACTIVO MI LISTA DE MARCAS CUANDO SEA MAYOR A 0 EL STRING
  onKeyPres(e: any) {
    if (e.target.value.length >= 1) {
      this.ocultar = false;
    } //MOSTRAR
    if (e.target.value.length <= 0) {
      this.ocultar = true;
    } //OCULTAR
    if (e.key === 'Backspace') {
      this.formB.formProducts.patchValue({
        id_marca: '',
      });
    } //CAPTURO EL BORRAR PARA SETEAR EL ID EN BLANCO
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
