import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseUsersForm } from '../../models/BaseFormUsers';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-forms-users',
  templateUrl: './forms-users.component.html',
  styleUrls: ['./forms-users.component.css'],
})
export class FormsUsersComponent implements OnInit {
  public idUsers: any;
  public emailUsers: any;
  load = false;
  constructor(
    public formB: BaseUsersForm,
    private router: Router,
    private _route: ActivatedRoute,
    private apiService: UsersService,
    private position: PositionUser
  ) {
    this.idUsers = this._route.snapshot.paramMap.get('id'); //OBTENER El ID
    this.emailUsers = this._route.snapshot.paramMap.get('users'); //OBTENER EL Email
  }

  ngOnInit(): void {
    this.position.getPositionUser(); //POSICION DEL USUARIO
    this.formB.formUsers.patchValue({ id_usuario: this.idUsers }); //OBTENGO EL ID DEL USUARIO
  }
  //ENVIAR FORMULARIO POR PUT
  submit() {
/*     this.load = false;
    const users = this.formB.getDataForm(
      this.position.latitud,
      this.position.longitud
    );
    this.apiService.postDataUser(users).subscribe((res) => {
      this.load = true;
      this.router.navigate([
        `/${UrlFront.ActivarCuenta.cuenta}/${UrlFront.ActivarCuenta.mensajeAlCorreo}`,
        this.emailUsers,
      ]); //ENVIAR A LA RUTA DE MENSAJE DE CORREO Y EL EMAIL
    }); */
  }
  //LIMPIAR FORMULARIO
  limpiar() {
    this.formB.limpiarForm(); //LIMPIAR FORMULARIO
  }
  regresar() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
