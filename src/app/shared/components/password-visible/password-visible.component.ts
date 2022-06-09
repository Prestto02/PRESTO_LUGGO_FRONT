import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-visible',
  templateUrl: './password-visible.component.html',
  styleUrls: ['./password-visible.component.css'],
})
export class PasswordVisibleComponent implements OnInit {
  @Input('formB') formB: any | null = null;
  @Input('password') passwordName: any | null = null;
  @Input('class') class: any | null = null;
  @Input('classTwo') classTwo: any | null = null;
  sugerencias: boolean = false;
  password: boolean = false;
  password2: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  //MOUSE CLICK EVENT
  mouseClickEvent() {
    this.sugerencias = true; //PARA PRESENTAR LAS SUGERENCIAS
  }

  perdioElFocus() {
    this.sugerencias = false; //PARA OCULTAR LAS SUGERENCIAS
  }
  verPassword() {
    this.password = !this.password;
  }
  //VER CONTRASEÑA 2
  verPassword2() {
    this.password2 = !this.password2;
  }
}
