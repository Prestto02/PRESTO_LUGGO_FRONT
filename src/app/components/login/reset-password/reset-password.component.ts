import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from '../../shared/routes/RoutesFront';
import { BaseFormLogin } from '../models/BaseFormLogin';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  public buscarUsuario: boolean = false;
  constructor(public formB: BaseFormLogin, private router: Router) {}

  ngOnInit(): void {}
  //SUBMIT
  submit() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
  //BUSCAR
  buscar() {
    const email = this.formB.registerUser.value.email;
    email === 'admin@admin.com'
      ? (this.buscarUsuario = true)
      : (this.buscarUsuario = false);
  }
  regresarLogin() {
    this.formB.limpiarForm();
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
