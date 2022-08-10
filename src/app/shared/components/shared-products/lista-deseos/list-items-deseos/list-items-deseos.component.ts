import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/login/services/token.service';
import { AddCarsOrListDesire } from 'src/app/shared/helpers/AddCarsOrListDesire';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ProductListApi } from '../../models/ProducstList';
import { BaseFormListaDeseos } from '../model/BaseFormListaDeseos.model';
import { ListaDeseosService } from '../services/lista-deseos.service';

@Component({
  selector: 'app-list-items-deseos',
  templateUrl: './list-items-deseos.component.html',
  styleUrls: ['./list-items-deseos.component.css'],
})
export class ListItemsDeseosComponent implements OnInit {
  public urlImg = RepositorioImg.urlRepositorio;
  imgEmptyListDeseos = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/lista-deseos/empty-wishlist.png`;
  dataListDeseos: ProductListApi[] = []; //OBTENER LA LISTA DE DESEOS
  coleccionUsuario: any;
  constructor(
    private apiListDeseos: ListaDeseosService, //LISTADO DESEOS SERVICES
    private addCars: AddCarsOrListDesire,
    public formB: BaseFormListaDeseos,
    private tokenServi: TokenService //TOKEN SERVICES
  ) {}

  ngOnInit(): void {
    this.getDataListDeseos();
    this.getColeccionUser();
  }

  //OBTENER LAS COLECCION DEL USUARIO
  getColeccionUser() {
    const id = this.tokenServi.getTokenId();
    if (id)
      this.apiListDeseos.getAllColeccion(id).subscribe((res) => {
        this.coleccionUsuario = res;
      });
  }
  //OBTENER LA COLECCION DEL USUARIO POR ID
  obtenerColeccionId(id: number) {
    /*     this.apiListDeseos.getColeccionId(id).subscribe((res) => {
      this.dataListDeseos = res;
    }); */
  }
  //AGREGAR AL CARRITO
  agregarAlCarrito(id: number) {
    this.addCars.addProductCars(id);
    //PARA SUBIR EL ITEMS DEL CARRITO
  }
  //TRAER TODO LO QUE SE OBTUVO DE LA LISTA DE DESEOS
  getDataListDeseos() {
    this.apiListDeseos.listaDeseos.subscribe((res: ProductListApi[]) => {
      this.dataListDeseos = res; //ASIGNO LO DATOS A MI DATA LISTDESEOS
    });
  }
  //ELIMINAR DE LA LISTA DE DESEOS
  eliminarListaDeseos(id: number) {
    this.apiListDeseos.eliminarListaDeseos(id); //ELIMINAR DE LA LISTA
    /* this.checkIcon.removeCheckDesire(id); //QUITAR EL CHECK DE LOS PRODUCTOS */
  }
  //AGREGAR A LA COLECCION
  agregarColeccion(id_articulo: number, id_lista: number) {
    // const transforId = Number(id_articulo); id_articulo: transforId
    const form = { id_articulo, id_lista };
    this.apiListDeseos.putListaColeccion(form).subscribe((res) => {});
  }
}
