import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/login/services/token.service';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { ListaDeseosComponent } from '../lista-deseos.component';

import { BaseFormListaDeseos } from '../model/BaseFormListaDeseos.model';
import { ListaDeseosService } from '../services/lista-deseos.service';

@Component({
  selector: 'app-agregar-coleccion',
  templateUrl: './agregar-coleccion.component.html',
  styleUrls: ['./agregar-coleccion.component.css'],
})
export class AgregarColeccionComponent implements OnInit {
  load = false;
  idUsuario: any;
  dataListProductos: any;
  constructor(
    public formB: BaseFormListaDeseos, //FORMULARIO DE LISTA DE DESEOS
    private position: PositionUser, //POSICION DEL USUARIO
    private tokenUser: TokenService, //OBTENER EL ID DEL USUARIO
    private serviListaDeseos: ListaDeseosService, //LISTA DE DESEOS
    private listaDeseosComponent: ListaDeseosComponent, //LISTA DE DESEO COMPONENTE
    private serviMessage: MessageFrontEndService
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser();
    this.obtenerPosicion(); //OBTENER LA POSICION DEL USUARIO
    this.getDeseosLista(); //OBTENGO TODA LA LISTA DE DESEOS
  }
  //OBTENER TODAS LAS COLECCION

  getDeseosLista() {
    this.serviListaDeseos.listaDeseos.subscribe((res) => {
      this.dataListProductos = res;
    });
  }
  //OBTENER LA POSCICION DEL USUARIO
  obtenerPosicion() {
    this.idUsuario = this.tokenUser.getTokenId();
    this.formB.setValuePosicionUsuario(
      this.position.latitud,
      this.position.longitud,
      this.idUsuario
    ); //SETEO LO QUE VIENE DEL LOCAL STORAGE Y LA POSICION DEL USUARIO
  }

  //AGREGAR A LA COLECCION EL ARTITULO
  addArticulo() {
    this.formB.addDetalleArticulos(); //AGREGO NUEVO ARTICULO A MI LISTA DE DESEOS
  }

  //ELIMINAR DE LA COLECCION DE ARTICULOS
  removeArticulo(index: any) {
    this.formB.removeDetalleArticulos(index); //ELIMINO DE LA LISTA DE DESEOS
  }

  //GUARDAR LA LISTA DE DESEOS COLECCION
  setValueColeccionLista() {
    this.serviListaDeseos
      .postListaColeccion(this.formB.formListaDeseos.value)
      .subscribe((res) => {
        this.serviMessage.getSuccessMessage(
          message.Success.title,
          message.Success.coleccionRegistrado
        );
        this.formB.limpiar();
        this.listaDeseosComponent.getColeccionUser();
      });
  }
}
