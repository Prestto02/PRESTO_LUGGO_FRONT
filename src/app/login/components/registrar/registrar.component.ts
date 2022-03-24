import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { PosicionService } from 'src/app/shared/services/posicion.service';
import { BaseFormLogin } from '../../models/BaseFormLogin';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  error = false;
  messageError = '';
  constructor(
    public formB: BaseFormLogin,
    private router: Router,
    private apiService: LoginService,
    private position: PositionUser
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser();
  }

  //SUBMIT DATA API
  submit() {
    const users = this.formB.getDataFormLogin(
      this.position.latitud,
      this.position.longitud
    );
    this.apiService.postUserDataApi(users).subscribe(
      (res) => {
        this.formB.limpiarForm();
        this.router.navigate([
          `/${UrlFront.Users.users}/${UrlFront.Users.post}`,
          res,
          users.user,
        ]);
      },
      (err) => {
        this.error = true;
        this.messageError = err.error;
      }
    );
  }
  //LIMPIAR FORMULARIO
  limpiar() {
    this.formB.limpiarForm();
  }
  //REGRESAR A INICIO DE SESiON= Login/inicio-sesion
  regresar() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
