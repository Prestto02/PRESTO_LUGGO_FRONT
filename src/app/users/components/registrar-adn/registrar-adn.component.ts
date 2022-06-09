import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { BaseFormAdnUsers } from './models/BaseFormAdnUser';

@Component({
  selector: 'app-registrar-adn',
  templateUrl: './registrar-adn.component.html',
  styleUrls: ['./registrar-adn.component.css'],
})
export class RegistrarAdnComponent implements OnInit {
  constructor(
    public formB: BaseFormAdnUsers, //FORM ADN USERS
    private position: PositionUser //CLASS POSITION USERS
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser();
  }

  //CHECKED RUC O CEDULA
  checkedRucCedula(e: any) {
    //CONSULTO SI VIENE EL RUC O CEDULA
    if (e.target.checked && e.target.value === 'Ruc') {
      this.formB.formAdn.patchValue({
        CedulaCheck: '',
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
}
