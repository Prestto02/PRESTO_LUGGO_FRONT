import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from '../../shared/routes/RoutesFront';
import { BaseFormLogin } from '../models/BaseFormLogin';
import { PasswordResetService } from '../services/password-reset.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  public buscarUsuario: boolean = false;
  constructor(
    public formB: BaseFormLogin,
    private router: Router,
    private serviPassword: PasswordResetService
  ) {}

  ngOnInit(): void {}
  //SUBMIT
  submit() {
    const form = this.formB.getPasswordReset();
    this.serviPassword.postResetPassword(form).subscribe(
      (res) => {
        this.router.navigateByUrl(
          `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
        );
      },
      (err) => {
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
