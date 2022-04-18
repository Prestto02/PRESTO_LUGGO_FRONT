import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseFormLogin } from '../../models/BaseFormLogin';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  public urlapi = UrlApi.loginFacebook;
  error = false; //ERORES
  load = false; //LOAD
  sugerencias = false; //SUGERENCIAS
  constructor(
    public formB: BaseFormLogin,
    private router: Router,
    private apiService: LoginService,
    private position: PositionUser
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser(); //POSICION DEL USUARIO
  }
  //MOUSE CLICK EVENT
  mouseClickEvent() {
    this.sugerencias = true; //PARA PRESENTAR LAS SUGERENCIAS
  }
  perdioElFocus() {
    this.sugerencias = false; //PARA OCULTAR LAS SUGERENCIAS
  }
  //SUBMIT DATA API
  submit() {
    this.load = true;
    const users = this.formB.getDataRegisterUser(
      this.position.latitud,
      this.position.longitud
    ); //TRANSFORMAR A UN JSON ESTANDAR
    this.apiService.postUserDataApi(users).subscribe(
      (res) => {
        this.formB.limpiarForm(); //LIMPIO FORMULARIO
        this.router.navigate([
          `/${UrlFront.ActivarCuenta.cuenta}/${UrlFront.ActivarCuenta.mensajeAlCorreo}`,
          users.user,
        ]); //ENVIO EL USUARIO A LA ACTIVACION DEL CORREO
      },
      (err) => {
        this.load = false; //SI HAY ERROR MUESTRO MENSAJE
        console.log(err);
      }
    );
  }
  //LIMPIAR FORMULARIO
  limpiar() {
    this.formB.limpiarForm();
  }
  //REGRESAR A INICIO DE SESiON= Login/inicio-sesion
  irAlLogin() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
