import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormLogin {
  constructor(private formB: FormBuilder) {}
  registerUser = this.formB.group({
    id: [''],
    email: ['', [Validators.required]],
    contrasena: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern(/^[A-Za-z0-9]+$/g),
      ],
    ],
    contrasena_conf: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern(/^[A-Za-z0-9]+$/g),
      ],
    ],
  });
  //FORM LOGIN
  loginUser = this.formB.group({
    email: ['', [Validators.required]],
    contrasena: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
    ],
  });
  limpiarForm() {
    this.registerUser.reset();
    this.loginUser.reset();
  }
  getDataFormCuenta() {
    const objPerson = {
      User: this.registerUser.value.email,
      Pass: this.registerUser.value.contrasena,
    };
    return objPerson;
  }
  //Data form login
  getDataFormLogin() {
    const objPerson = {
      user: this.loginUser.value.email,
      pass: this.loginUser.value.contrasena,
    };
    return objPerson;
  }
}
