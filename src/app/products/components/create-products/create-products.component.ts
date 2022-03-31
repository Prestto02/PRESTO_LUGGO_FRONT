import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
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
    private apiCategoria: CategoriasService //SERVICES CATEGORIAS
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser(); //OBTENGO LA POSICION DEL USUARIO
    this.getCategorias();
  }
  //OBTENGO EL ARCHIVO IMAGEN Y LO TRANSFOMO
  getArchive(e: any) {
    const buscar = ',';
    this.imgProducts = e[0].base64;
    const index = this.imgProducts.indexOf(buscar); //BUSCO LA , DEL BASe 64
    this.imagenTransformada = this.imgProducts.slice(index + 1); //ENCONTRADO LA POSICION DE LA , ENViARLA A LA API
  }
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
