import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { BaseFormAdnUsers } from './models/BaseFormAdnUser';

@Component({
  selector: 'app-registrar-adn',
  templateUrl: './registrar-adn.component.html',
  styleUrls: ['./registrar-adn.component.css'],
})
export class RegistrarAdnComponent implements OnInit {
  sugerencias: boolean = false;
  password: boolean = false;
  password2: boolean = false;
  constructor(
    public formB: BaseFormAdnUsers, //FORM ADN USERS
    private position: PositionUser //CLASS POSITION USERS
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
  //VER CONTRASÑA
  verPassword() {
    this.password = !this.password;
  }
  //VER CONTRASEÑA 2
  verPassword2() {
    this.password2 = !this.password2;
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
    }
    if (e.target.checked && e.target.value === 'cedula') {
      this.formB.formAdn.patchValue({
        RucCheck: '',
        Cedula: '',
        NombreCompleto: '',
      });
    }
  }
}
