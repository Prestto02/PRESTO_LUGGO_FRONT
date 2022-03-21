import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PatterExpresion } from '../../shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class BaseUsersForm {
  constructor(private formB: FormBuilder) {}
  //USERS
  formUsers = this.formB.group({
    id_usuario: [''],
    nombre1: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[A-Za-z ]+$/),
      ],
    ],
    nombre2: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[A-Za-z ]+$/),
      ],
    ],
    apellido1: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(/^[A-Za-z ]+$/),
      ],
    ],
    apellido2: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(/^[A-Za-z ]+$/),
      ],
    ],
    direccion2: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
        Validators.pattern(/^[A-Za-z ]+$/),
      ],
    ],
    celular: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/[0-9]{2}[0-9]{8}/),
      ],
    ],
    cedula: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/[0-9]{2}[0-9]{8}/),
      ],
    ],
    telefono: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/[0-9]{2}[0-9]{8}/),
      ],
    ],
    sexo: ['', [Validators.required]],
    FechaNacimiento: ['', Validators.required],
  });
  //LIMPIAR FORM
  limpiarForm() {
    this.formUsers.reset();
  }
  //TRANSFORMAR LOS DATOS
  getDataForm() {
    const ObjetoPersona = {
      id_usuario: this.formUsers.value.id_usuario,
      nombre1: this.formUsers.value.nombre1,
      nombre2: this.formUsers.value.nombre2,
      apellido1: this.formUsers.value.apellido1,
      apellido2: this.formUsers.value.apellido2,
      cedula: this.formUsers.value.celular,
      datopersona: {
        sexo: this.formUsers.value.sexo,
        celular: this.formUsers.value.celular,
        telefono: this.formUsers.value.telefono,
        direccion2: this.formUsers.value.direccion2,
        FechaNacimiento: this.formUsers.value.FechaNacimiento,
      },
    };
    return ObjetoPersona;
  }
}
