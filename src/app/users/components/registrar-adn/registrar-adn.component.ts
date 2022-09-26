import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { BaseFormAdnUsers } from './models/BaseFormAdnUser';

@Component({
  selector: 'app-registrar-adn',
  templateUrl: './registrar-adn.component.html',
  styleUrls: ['./registrar-adn.component.css'],
})
export class RegistrarAdnComponent implements OnInit {
  datePicker: any;
  constructor(
    public formB: BaseFormAdnUsers, //FORM ADN USERS
    private position: PositionUser, //CLASS POSITION USERS
    private tokenUser: TokenService, //TOKEN SERVICES
    private router: Router //ROUTES
  ) {}

  ngOnInit(): void {
    /*     if (this.tokenUser.getTokenEmail() || this.tokenUser.getTokenId()) {
      this.router.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
    } */
    this.position.getPositionUser();
    this.obtenerDateActual();
  }

  //CHECKED RUC O CEDULA
  checkedRucCedula(e: any) {
    //CONSULTO SI VIENE EL RUC O CEDULA
    if (e.target.checked && e.target.value === 'Ruc') { //SI ES RUC SETEAR A VACIO
      this.formB.formAdn.patchValue({
        CedulaCheck: '',
        tipo_contribuyente: '',
        Ruc: '',
        Razon_Social: '',
      });
      this.formB.removeValidateCedulaNombre();
      this.formB.setValidatorsRucCompleto();
    }
    if (e.target.checked && e.target.value === 'cedula') {
      this.formB.formAdn.patchValue({
        RucCheck: '',
        Cedula: '',
        NombreCompleto: '',
      });
      this.formB.removeValidateRuc();
      this.formB.setValidatorsCedulaNombreCompleto();
    }
  }
  //OBTENER LA FECHA ACTUAL
  obtenerDateActual(): void {
    this.datePicker = new Date().toISOString().split('T')[0];
  }
}
