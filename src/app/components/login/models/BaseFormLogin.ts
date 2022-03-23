import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordsMustBeEqual } from './passwordMustEquals';

@Injectable({ providedIn: 'root' })
export class BaseFormLogin {
  constructor(private formB: FormBuilder) {}
  registerUser = this.formB.group(
    {
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ],
      ],
      contrasena_conf: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ],
      ],
    },
    { validator: passwordsMustBeEqual }
  );
  //FORM LOGIN
  loginUser = this.formB.group({
    email: ['', [Validators.required]],
    contrasena: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
    ],
  });
  //BUSCaR USUARIO
  buscarUser = this.formB.group({
    user: ['', [Validators.required, Validators.email]],
  });
  //CAMBIAR CONTRASENA
  passwordReset = this.formB.group(
    {
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ],
      ],
      contrasena_conf: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ],
      ],
    },
    { validator: passwordsMustBeEqual }
  );
  limpiarForm() {
    this.registerUser.reset();
    this.loginUser.reset();
  }
  //Data form login
  getDataFormLogin() {
    const objPerson = {
      user: this.loginUser.value.email,
      pass: this.loginUser.value.contrasena,
    };
    return objPerson;
  }

  getPasswordReset() {
    const objPassword = {
      pass: this.passwordReset.value.contrasena,
    };
    return objPassword;
  }
}
