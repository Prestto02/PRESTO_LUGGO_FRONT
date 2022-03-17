import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlFront } from '../../shared/routes/RoutesFront';
import { BaseUsersForm } from '../models/BaseFormUsers';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-forms-users',
  templateUrl: './forms-users.component.html',
  styleUrls: ['./forms-users.component.css'],
})
export class FormsUsersComponent implements OnInit {
  public idUsers: any;
  constructor(
    public formB: BaseUsersForm,
    private router: Router,
    private _route: ActivatedRoute,
    private apiService: UsersService
  ) {
    this.idUsers = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.formB.formUsers.patchValue({ id_usuario: this.idUsers });
  }
  //ENVIAR FORMULARIO POR PUT
  submit() {
    const users = this.formB.getDataForm();
    console.log(users);
    /* this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );*/
    this.apiService.putDataUser(users).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl(
          `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
        );
      },
      (err) => {
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
