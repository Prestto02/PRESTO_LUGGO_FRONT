import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from '../../shared/routes/RoutesFront';
import { BaseFormLogin } from '../models/BaseFormLogin';
import { PasswordResetService } from '../services/password-reset.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css'],
})
export class BuscarUsuarioComponent implements OnInit {
  error = false;
  success = false;
  constructor(
    public formB: BaseFormLogin,
    private router: Router,
    private serviPassword: PasswordResetService
  ) {}

  ngOnInit(): void {}
  submit() {
    const email = this.formB.buscarUser.value;
    this.serviPassword.postUserEmail(email).subscribe(
      (res) => {
        this.error = false;
        this.success = true;
      },
      (err) => {
        console.log(err);
        this.error = true;
        this.success = false;
      }
    );
  }
  regresarLogin() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
