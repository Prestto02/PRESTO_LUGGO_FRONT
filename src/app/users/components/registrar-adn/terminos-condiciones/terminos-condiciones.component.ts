import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { termsConditionAdn } from './helpers/ListTermsConditions';
import { TerminosCondicionesService } from './services/terminos-condiciones.service';
@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.css'],
})
export class TerminosCondicionesComponent implements OnInit, OnDestroy {
  disabledScroll: boolean = true;
  dataTerms: string = '';
  constructor(
    public formAdn: BaseFormAdnUsers,
    public formNegocioAdn: BaseFormNegocioAdn,
    public formPagosAdn: BaseFormPagosAdn,
    public formB: BaseFormTerminarAdn,
    private postData: DataFormAdn,
    private position: PositionUser,
    private apiAdn: UserAdnService,
    private toatsMessage: MessageFrontEndService,
    private router: Router,
    private apiTermsCondition: TerminosCondicionesService
  ) {}
  ngOnDestroy(): void {
    console.log('destruir');
  }

  ngOnInit(): void {
    this.position.getPositionUser();
    this.getDataTermsCondition();
  }

  getDataTermsCondition() {
    this.apiTermsCondition
      .getIdTermsCondition(termsConditionAdn.id)
      .subscribe((res) => {
        this.dataTerms = res.descripcion_Termino;
      });
  }

  onScroll(e: any) {
    if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
      this.disabledScroll = false;
    }
  }
  //GUARDAR ADN
  guardarAdn() {
    /*     const form = this.postData.getFormData(
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
    }); */
    this.router.navigate([
      `/${UrlFront.ActivarCuenta.cuenta}/${UrlFront.ActivarCuenta.mensajeAlCorreo}`,
      'asdas@jsadas',
    ]);
  }
}
