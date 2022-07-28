import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/login/services/token.service';
import { EncryptService } from 'src/app/shared/class/Encryptar';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-index-direccion',
  templateUrl: './index-direccion.component.html',
  styleUrls: ['./index-direccion.component.css'],
})
export class IndexDireccionComponent implements OnInit {
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
  /* VERIFOCAR ROL DE USUARIO */
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
