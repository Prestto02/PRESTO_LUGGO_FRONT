import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/login/services/token.service';
import { BaseFormListaDeseos } from './model/BaseFormListaDeseos.model';
import { ListaDeseosService } from './services/lista-deseos.service';

@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.css'],
})
export class ListaDeseosComponent implements OnInit {
  filasDeDos: boolean = false;
  emailUsuario: any;
  idUser: any;
  filterPost: string = '';
  arrayListCheck: any = [];
  constructor(
    private tokenServi: TokenService, //TOKEN SERVICES
    public formB: BaseFormListaDeseos,
    private apiList: ListaDeseosService
  ) {
    this.emailUsuario = this.tokenServi.getTokenEmail();
    this.idUser = this.tokenServi.getTokenId();
  }

  ngOnInit(): void {
    this.getAllListUsers();
  }

  getAllListUsers(): void {
    this.apiList.getAllColeccion(this.idUser).subscribe((res) => {
      console.log(res);
    });
    this.apiList.getColeccionId(this.idUser).subscribe((res) => {
      console.log(res);
    });
  }
}
