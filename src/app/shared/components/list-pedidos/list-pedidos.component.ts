import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/login/services/token.service';
import { EncryptService } from '../../class/Encryptar';
import { UrlFront } from '../../routes/RoutesFront';
import { ListPedidosUsers } from './models/ListPedidos.models';
import { ClientListPedidosService } from './services/client-list-pedidos.service';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.component.html',
  styleUrls: ['./list-pedidos.component.css'],
})
export class ListPedidosComponent implements OnInit {
  ruta: string = '';
  cliente: string = '';
  rolTipoUsuario: string = '';
  rolTipo: any;
  idUsuario: any;
  constructor(
    private token: TokenService,
    private encrypServi: EncryptService
  ) {
    this.idUsuario = this.token.getTokenId();
  }

  ngOnInit(): void {
    this.verifyRolUsuario();
  }
  verifyRolUsuario() {
    this.irAlPerfilUsuario();
    if (this.rolTipoUsuario === '1') {
      this.cliente = 'Cliente';
      this.ruta = `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}/${this.idUsuario}`;
    }
    if (this.rolTipoUsuario === '2') {
      this.cliente = 'ADN';
      this.ruta = `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}`;
    }
  }
  //IR AL PERFIL DE USUARIO
  irAlPerfilUsuario() {
    this.rolTipo = localStorage.getItem('dataUsuarioItems');
    if (this.rolTipo) {
      this.rolTipo = this.encrypServi.encrypOrDesrypRol(
        this.rolTipo,
        'Desencriptar'
      ); //DESENCRIPTAR
      this.rolTipoUsuario = this.rolTipo;
      //this.authServi.verificarTipoRol(this.rolTipo); //PARA IR A LA RUTA SEGUN EL ROL
    }
  }
}
