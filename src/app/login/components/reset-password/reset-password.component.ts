import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseFormLogin } from '../../models/BaseFormLogin';
import { PasswordResetService } from '../../services/password-reset.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  public buscarUsuario: boolean = false;
  public codigoCheck: any;
  public urlCheck: any;
  error = false;
  success = false;
  constructor(
    public formB: BaseFormLogin,
    private router: Router,
    private serviPassword: PasswordResetService,
    private position: PositionUser
  ) {
    this.urlCheck = this.router.parseUrl(this.router.url);
    this.codigoCheck = this.urlCheck.queryParams['c'];
  }

  ngOnInit(): void {
    this.position.getPositionUser(); //POSICION DEL USUARIO
    //this.comprobarCodigo();
  }
  //COMPROBAR CODIGo
  comprobarCodigo() {
    const check = {
      codigo_recuperacion: this.codigoCheck,
    };
    this.serviPassword.postCodigoRecuperacion(check).subscribe(
      (res) => {
        console.log('success');
      },
      (err) => {
        this.router.navigateByUrl(
          `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
        );
      }
    );
  }
  //SUBMIT
  submit() {
    const form = this.formB.getPasswordReset(
      this.codigoCheck,
      this.position.latitud,
      this.position.longitud
    ); //PARA TRANSFORMAR EL JSON
    this.serviPassword.postResetPassword(form).subscribe(
      (res) => {
        this.error = false;
        this.success = true;
      },
      (err) => {
        //SI ES ERROR PRESENTARLO
        this.error = true;
        this.success = false;
        console.log(err);
      }
    );
  }
  regresarLogin() {
    this.formB.limpiarForm();
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
