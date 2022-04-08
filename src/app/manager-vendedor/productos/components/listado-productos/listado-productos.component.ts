import { Component, OnInit } from '@angular/core';
import { EditRegisterModalService } from 'src/app/shared/components/modals/services/edit-register-modal.service';
import { BaseFormProducts } from '../../models/BaseformProduct';
import { ProductsService } from '../../services/products.service';
import { CreateProductsComponent } from '../create-products/create-products.component';

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
  //ALL PRODUCTS
  getAllDataProducts() {
    this.apiProducts.getDataArticulos().subscribe((res) => {
      this.dataProducts = res;
    });
  }
  //EDIT PRODUCTS
  editarProduct(product: any) {
    //this.formB.formProducts.setValue({...product});
    this.modalServi.editModal(); //CAMBIO EL ESTADO DEL MODAL
  }
  registerProduct() {
    this.modalServi.registerModal(); //CAMBIO EL ESTADO DEL MODAL
  }
  //PARA ELIMINAR EL PRODUCTO
  eliminarProduct(id: any) {}
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
