import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/login/services/token.service';
import { AddCarsOrListDesire } from 'src/app/shared/helpers/AddCarsOrListDesire';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { errorFront as message } from '../../../dictonary/MessageErrorFront';
import { CarritoItemsComponent } from '../../index/menu-index/menu/carrito-items/carrito-items.component';
/* import { IconCheckServices } from '../list-products/icons-cars-desire/services/IconsCheck.service'; */
import { ListaDeseosService } from './services/lista-deseos.service';

@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.css'],
})
export class ListaDeseosComponent implements OnInit {
  public urlImg = RepositorioImg.urlRepositorio;
  imgEmptyListDeseos = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/lista-deseos/empty-wishlist.png`;
  dataListDeseos: any; //OBTENER LA LISTA DE DESEOS
  filterPost = '';
  filasDeDos = false;
  coleccionUsuario: any;
  emailUsuario: any;
  constructor(
    private apiListDeseos: ListaDeseosService, //LISTADO DESEOS SERVICES
    private addCars: AddCarsOrListDesire,
    private tokenServi: TokenService, //TOKEN SERVICES
    private serviMessage: MessageFrontEndService
  ) /*  private checkIcon: IconCheckServices */
  {}

  ngOnInit(): void {
    this.getDataListDeseos(); //PReSENTO LA LISTA DE DESEOS
    this.emailUsuario = this.tokenServi.getTokenEmail();
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
  obtenerColeccionId(id: any) {
    this.apiListDeseos.getColeccionId(id).subscribe((res) => {
      this.dataListDeseos = res;
    });
  }
  //AGREGAR AL CARRITO
  agregarAlCarrito(id: any) {
    this.addCars.addProductCars(id);
    //PARA SUBIR EL ITEMS DEL CARRITO
  }
  //TRAER TODO LO QUE SE OBTUVO DE LA LISTA DE DESEOS
  getDataListDeseos() {
    this.apiListDeseos.listaDeseos.subscribe((res) => {
      this.dataListDeseos = res; //ASIGNO LO DATOS A MI DATA LISTDESEOS
    });
  }
  //ELIMINAR DE LA LISTA DE DESEOS
  eliminarListaDeseos(id: any) {
    this.apiListDeseos.eliminarListaDeseos(id); //ELIMINAR DE LA LISTA
    /* this.checkIcon.removeCheckDesire(id); //QUITAR EL CHECK DE LOS PRODUCTOS */
  }
  //AGREGAR A LA COLECCION
  agregarColeccion(id_articulo: any, id_lista: any) {
    // const transforId = Number(id_articulo); id_articulo: transforId
    const form = { id_articulo, id_lista };
    this.apiListDeseos.putListaColeccion(form).subscribe((res) => {
      this.serviMessage.getSuccessMessage(
        message.Success.title,
        message.Success.coleccionAgregado
      ); //SUCCESS
    });
  }
}
