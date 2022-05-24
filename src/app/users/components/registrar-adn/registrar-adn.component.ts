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
  constructor(
    public formB: BaseFormAdnUsers, //FORM ADN USERS
    private position: PositionUser, //CLASS POSITION USERS
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

}
