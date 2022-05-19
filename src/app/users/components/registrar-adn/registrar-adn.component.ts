import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
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
  arrayBanco: any = [];
  arrayPais: any = [];
  arrayCiudad: any = [];
  sugerencias: boolean = false;
  load: boolean = false;
  constructor(
    private apiBanco: BancoService, //SERVICES BANCO
    public formB: BaseFormAdnUsers, //FORM ADN USERS
    private position: PositionUser, //CLASS POSITION USERS
    private apiAdn: UserAdnService, //SERVICES ADN
    private apiCiudadPais: CiudadPaisService, //SERVICES CIUDAD PAISES
    private toatsMessage: MessageFrontEndService
  ) {}

  ngOnInit(): void {
    this.getAllBancos();
    this.position.getPositionUser();
    this.getAllPaises();
  }
  //TRAER TODOS LOS BANCOS
  getAllBancos() {
    this.apiBanco.getAllBancos().subscribe((res) => {
      this.arrayBanco = res;
    });
  }
  //TRAER TODOS LOS PAISES
  getAllPaises() {
    this.apiCiudadPais.getPaises().subscribe((res) => {
      this.arrayPais = res;
    });
  }
  //TRAER TODAS LAS CIUDADES
  buscarCiudad(e: any) {
    const codigo = e.target.value;
    this.apiCiudadPais.getCiudades(codigo).subscribe((res) => {
      this.arrayCiudad = res;
    });
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
    this.load = false;
    const form = this.formB.getFormData(
      this.position.latitud,
      this.position.longitud
    );
    this.apiAdn.postUserAdn(form).subscribe((res) => {
      this.load = true;
      this.toatsMessage.getSuccessMessage(
        'Exito',
        'Se agrego con exito al usuario'
      );
      this.load = false;
    });
  }
}
