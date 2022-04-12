import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseUsersForm } from '../../models/BaseFormUsers';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-perfil-users',
  templateUrl: './perfil-users.component.html',
  styleUrls: ['./perfil-users.component.css'],
})
export class PerfilUsersComponent implements OnInit {
  private id: any;
  load = false;
  constructor(
    private serviUser: UsersService,
    private route: Router,
    private _route: ActivatedRoute,
    public formB: BaseUsersForm
  ) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.verifcarId();
    this.getOneIdPersona();
  }

  getOneIdPersona() {
    this.serviUser.getDataPerson(this.id).subscribe((res) => {
      this.formB.formUsers.setValue({ ...res }); //GUARDO EN EL FORM LO QUE TENGO DEL USUARIO
    });
  }
  //VERIFICAR SI EXISTE EL ID
  verifcarId() {
    if (!this.id)
      this.route.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
  }
  //ACTUALIZZAR DATOS
  actualizarDatos() {
    this.load = true;
  }

  //LIMPIAR FORMULARIO
  limpiar() {
    this.formB.limpiarForm();
  }
}
