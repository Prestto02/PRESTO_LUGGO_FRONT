import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { UsersService } from '../../services/users.service';
import { BaseFormCliente } from './models/BaseFormPerfilCliente';
import { IUsers, PerfilPersonaSecciones } from './models/PersonaPerfil';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css'],
})
export class PerfilClienteComponent implements OnInit {
  perfilPersona: any = PerfilPersonaSecciones;
  idUsuario: any;
  latitud: any;
  longitud: any;
  constructor(
    public formB: BaseFormCliente,
    private router: Router,
    private position: PositionUser,
    private Arouter: ActivatedRoute,
    private apiServi: UsersService,
    private apiMessage: MessageFrontEndService
  ) {
    this.idUsuario = this.Arouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.position.getPositionUser();
    this.getDataUsers();
  }

  ocultarSecciones(id: any) {
    this.perfilPersona.map((res: any) => {
      if (res.id === id) {
        res.disabled = false;
      } else {
        res.disabled = true;
      }
    });
  }
  /* TRAER EL DATO DEL USUARIO */
  getDataUsers() {
    this.apiServi.getDataUserId().subscribe((res: IUsers) => {
      this.formB.formCliente.setValue({ ...res });
    });
  }
  /* ACTUALIZAR INFORMACION */
  putInforUser() {
    const form: IUsers = this.formB.formCliente.value;
    form.latitud = this.position.latitud;
    form.longitud = this.position.longitud;
    this.apiServi.putDataPersona(form).subscribe((res: any) => {
      this.apiMessage.getSuccessMessage('', 'Se actualizaron sus datos');
    });
  }
  /* REGRESAR AL MODULO MI CUENTA */
  regresar() {
    this.router.navigateByUrl(
      `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`
    );
  }
}
