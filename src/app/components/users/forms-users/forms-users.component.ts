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
    this.apiService.postDataUser(users).subscribe(
      (res) => {
        this.router.navigateByUrl(
          `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
        );
        console.log(res);
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
