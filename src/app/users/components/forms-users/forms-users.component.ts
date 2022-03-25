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
  error = false;
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
    this.position.getPositionUser(); //POSiCION Dle USUARIO
    this.formB.formUsers.patchValue({ id_usuario: this.idUsers });
  }
  //ENVIAR FORMULARIO POR PUT
  submit() {
    this.error = false;
    const users = this.formB.getDataForm(
      this.position.latitud,
      this.position.longitud
    );
    this.apiService.postDataUser(users).subscribe(
      (res) => {
        this.router.navigate([
          `/${UrlFront.ActivarCuenta.cuenta}/${UrlFront.ActivarCuenta.mensajeAlCorreo}`,
          this.emailUsers,
        ]); //enviaR A lA ruTA DE MEnsajE DE CORREO Y EL EMAIL
        console.log(res);
      },
      (err) => {
        this.error = true;
        console.log(err);
      }
    );
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
