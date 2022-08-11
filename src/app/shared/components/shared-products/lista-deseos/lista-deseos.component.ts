import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/login/services/token.service';
import { ProductListApi } from '../models/ProducstList';
import { BaseFormListaDeseos } from './model/BaseFormListaDeseos.model';
import { CollecionUser } from './model/ListDesireUser.models';
import { ListaDeseosService } from './services/lista-deseos.service';

@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.css'],
})
export class ListaDeseosComponent implements OnInit {
  emailUsuario: any;
  idUser: any;
  arrayListCheck: ReadonlyArray<CollecionUser> = [];
  dataListDeseos: ProductListApi[] = []; //OBTENER LA LISTA DE DESEOS
  id_list: number = 0;
  constructor(
    private tokenServi: TokenService, //TOKEN SERVICES
    public formB: BaseFormListaDeseos,
    private apiList: ListaDeseosService
  ) {
    this.emailUsuario = this.tokenServi.getTokenEmail();
    this.idUser = this.tokenServi.getTokenId();
  }

  ngOnInit(): void {
    this.getDataListDeseos();
    this.getAllListUsers();
  }
  /* TRAIGO TODA LA COLECCIONES DE USUARIOS */
  getAllListUsers(): void {
    if (this.idUser)
      this.apiList
        .getAllColeccion(this.idUser)
        .subscribe((res: ReadonlyArray<CollecionUser>) => {
          this.arrayListCheck = res;
        });
  }
  /* TRAER LISTA DE DESOS POR USUAIRO */
  buscarIdCollection(id_collection: number): void {
    this.apiList
      .getColeccionId(id_collection)
      .subscribe((res: ProductListApi[]) => {
        this.dataListDeseos = res;
        this.id_list = id_collection;
      });
  }
  //TRAER TODO LO QUE SE OBTUVO DE LA LISTA DE DESEOS
  getDataListDeseos(): void {
    this.apiList.listaDeseos.subscribe((res: ProductListApi[]) => {
      this.dataListDeseos = res; //ASIGNO LO DATOS A MI DATA LISTDESEOS
    });
  }
  /* TODAS LA LISTA DE DESEOS DEL PRODUCTO */
  getProductsAllList(): void {
    this.apiList.getAllList().subscribe((res: ProductListApi[]) => {
      this.dataListDeseos = res;
    });
  }
}
