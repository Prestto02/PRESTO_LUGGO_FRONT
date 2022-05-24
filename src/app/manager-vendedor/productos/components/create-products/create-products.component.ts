import { Component, OnInit } from '@angular/core';
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
    private apiMarca: MarcaService, //API MARCA
    private apiProductServi: ProductsService,
    private router: Router, //ROUTER
    private dateApi: DataFormProducts
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
      });
    });
  }
}
