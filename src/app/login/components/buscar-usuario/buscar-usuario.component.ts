import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseFormLogin } from '../../models/BaseFormLogin';
import { PasswordResetService } from '../../services/password-reset.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css'],
})
export class BuscarUsuarioComponent implements OnInit {
  success = false;
  constructor(
    public formB: BaseFormLogin,
    private router: Router,
    private serviPassword: PasswordResetService,
    private position: PositionUser
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser();
  }
  //BUSCAR USUARIO
  submit() {
    const email = this.formB.getSearchUser(
      this.position.latitud,
      this.position.longitud
    );
    this.serviPassword.postUserEmail(email).subscribe(
      (res) => {
        this.success = true;
      },
      (err) => {
        this.success = false;
      }
    );
  }
  //REGRESAR LOGIn
  regresarLogin() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
