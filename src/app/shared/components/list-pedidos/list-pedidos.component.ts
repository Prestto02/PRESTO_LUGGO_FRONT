import { Component, OnInit } from '@angular/core';
import { RolUserService } from 'src/app/guards/services/rol-user.service';
import { TokenService } from 'src/app/login/services/token.service';
import { UrlFront } from '../../routes/RoutesFront';

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
  constructor(private token: TokenService, private typeRol: RolUserService) {
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
    this.rolTipo = this.typeRol.desCryptRolUser();
    this.rolTipoUsuario = this.rolTipo;
  }
}
