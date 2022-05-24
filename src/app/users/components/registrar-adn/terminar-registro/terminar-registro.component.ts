import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { DataFormAdn } from '../helpers/DataFormAdnUsers';
import { BaseFormAdnUsers } from '../models/BaseFormAdnUser';
import { BaseFormNegocioAdn } from '../models/BaseFormNegocio';
import { BaseFormPagosAdn } from '../models/BaseFormPagosAdn';
import { BaseFormTerminarAdn } from '../models/BaseFormTerminar';
import { UserAdnService } from '../services/user-adn.service';

@Component({
  selector: 'app-terminar-registro',
  templateUrl: './terminar-registro.component.html',
  styleUrls: ['./terminar-registro.component.css'],
})
export class TerminarRegistroComponent implements OnInit {
  constructor(
    public formAdn: BaseFormAdnUsers,
    public formNegocioAdn: BaseFormNegocioAdn,
    public formPagosAdn: BaseFormPagosAdn,
    public formB: BaseFormTerminarAdn,
    private postData: DataFormAdn,
    private position: PositionUser,
    private apiAdn: UserAdnService,
    private toatsMessage: MessageFrontEndService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser();
  }

  //GUARDAR ADN
  guardarAdn() {
    const form = this.postData.getFormData(
      this.position.latitud,
      this.position.longitud
    );
    console.log(form);
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
