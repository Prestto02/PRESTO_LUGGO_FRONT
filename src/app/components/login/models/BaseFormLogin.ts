import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseFormLogin {
  constructor(private formB: FormBuilder) {}
  registerUser = this.formB.group({
    id: [''],
    email: ['', [Validators.required, Validators.email]],
    contrasena: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
    ],
    contrasena_conf: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
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
    if (
      this.registerUser.value.contrasena ===
      this.registerUser.value.contrasena_conf
    ) {
      const objPerson = {
        User: this.registerUser.value.email,
        Pass: this.registerUser.value.contrasena,
      };
      return objPerson;
    } else {
      return false;
    }
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
