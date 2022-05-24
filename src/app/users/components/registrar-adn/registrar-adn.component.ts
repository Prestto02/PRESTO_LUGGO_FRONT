import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { BaseFormAdnUsers } from './models/BaseFormAdnUser';
import { BancoService } from './services/banco.service';
import { CiudadPaisService } from './services/ciudad-pais.service';
import { UserAdnService } from './services/user-adn.service';

@Component({
  selector: 'app-registrar-adn',
  templateUrl: './registrar-adn.component.html',
  styleUrls: ['./registrar-adn.component.css'],
})
export class RegistrarAdnComponent implements OnInit {
  sugerencias: boolean = false;
  constructor(
    public formB: BaseFormAdnUsers, //FORM ADN USERS
    private position: PositionUser, //CLASS POSITION USERS
    private apiAdn: UserAdnService, //SERVICES ADN
    private toatsMessage: MessageFrontEndService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser();
  }

  //MOUSE CLICK EVENT
  mouseClickEvent() {
    this.sugerencias = true; //PARA PRESENTAR LAS SUGERENCIAS
  }

  perdioElFocus() {
    this.sugerencias = false; //PARA OCULTAR LAS SUGERENCIAS
  }

  //GUARDAR ADN
  guardarAdn() {
    const form = this.formB.getFormData(
      this.position.latitud,
      this.position.longitud
    );
    this.apiAdn.postUserAdn(form).subscribe((res) => {
      this.toatsMessage.getSuccessMessage(
        'Exito',
        'Se agrego con exito al usuario'
      );
      this.router.navigate([
        `/${UrlFront.ActivarCuenta.cuenta}/${UrlFront.ActivarCuenta.mensajeAlCorreo}`,
        form.user,
      ]); //ENVIO EL USUARIO A LA ACTIVACION DEL CORREO
    });
  }
}
