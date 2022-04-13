import { Component, OnInit } from '@angular/core';
import { EditRegisterModalService } from 'src/app/shared/components/modals/services/edit-register-modal.service';
import { BaseFormProducts } from '../../models/BaseformProduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})
export class ListadoProductosComponent implements OnInit {
  constructor(
    private apiProducts: ProductsService, //PRODUCTS SERVIES
    private formB: BaseFormProducts, //BASE FORM PRODUCTS
    private modalServi: EditRegisterModalService //MODAL SERVICE
  ) {}
  dataProducts: any;
  key: string = 'id'; //ORRDER BY
  reverse: boolean = false; //ORDER BY
  p: number = 1; //PAGINACION EN 1
  searchProducts = '';
  ngOnInit(): void {
    this.getAllDataProducts();
  }
  //OBTENER TODOS LOS PRODUCTOS
  getAllDataProducts() {
    this.apiProducts.getDataProductos().subscribe((res) => {
      this.dataProducts = res;
    });
  }
  //EDIT PRODUCTS
  editarProduct(product: any) {
    console.log(product);
    //this.formB.formProducts.setValue({ ...product });
    this.formB.getPatchValueForm(product);
    this.modalServi.editModal(); //CAMBIO EL ESTADO DEL MODAL
  }
  //CAMBIO EL ESTADO DEL MODAL
  registerProduct() {
    this.modalServi.registerModal(); //CAMBIO EL ESTADO DEL MODAL
  }
  //PARA ELIMINAR EL PRODUCTO
  eliminarProduct(id: any) {
    if (confirm(`Se eliminara el producto con id: ${id}`))
      console.log('eliminado');
  }
  //BUSCAR PRODUCTOS
  onSearchProduct(search: any) {
    this.searchProducts = search;
  }
  //SORT ORDER BY
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
