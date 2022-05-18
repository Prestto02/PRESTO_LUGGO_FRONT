import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { BaseFormAdnUsers } from './models/BaseFormAdnUser';
import { BancoService } from './services/banco.service';
import { UserAdnService } from './services/user-adn.service';

@Component({
  selector: 'app-registrar-adn',
  templateUrl: './registrar-adn.component.html',
  styleUrls: ['./registrar-adn.component.css'],
})
export class RegistrarAdnComponent implements OnInit {
  arrayBanco: any = [];
  sugerencias: boolean = false;
  constructor(
    private apiBanco: BancoService,
    public formB: BaseFormAdnUsers,
    private position: PositionUser,
    private apiAdn: UserAdnService
  ) {}

  ngOnInit(): void {
    this.getAllBancos();
    this.position.getPositionUser();
  }
  //TRAER TODOS LOS BANCOS
  getAllBancos() {
    this.apiBanco.getAllBancos().subscribe((res) => {
      this.arrayBanco = res;
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
    const form = this.formB.getFormData(
      this.position.latitud,
      this.position.longitud
    );
    console.log(form);
    this.apiAdn.postUserAdn(form).subscribe((res) => {
      console.log(res);
    });
  }
}
