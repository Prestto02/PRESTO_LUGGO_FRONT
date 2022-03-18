import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from '../../shared/routes/RoutesFront';
import { BaseFormLogin } from '../models/BaseFormLogin';
import { LoginService } from '../services/login.service';

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
    private apiService: LoginService
  ) {}

  ngOnInit(): void {}
  //SUBMIT DATA API
  submit() {
    const users = this.formB.getDataFormCuenta();
    if (users) {
      this.apiService.postUserDataApi(users).subscribe(
        (res) => {
          this.formB.limpiarForm();
          this.router.navigate([
            `/${UrlFront.Users.users}/${UrlFront.Users.post}`,
            res,
          ]);
        },
        (err) => {
          this.error = true;
          this.messageError = err.error;
        }
      );
    } else {
      this.error = true;
      this.messageError = 'La contraseña no coincide';
    }
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
