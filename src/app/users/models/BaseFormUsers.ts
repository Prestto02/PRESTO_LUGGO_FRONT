import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

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
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    nombre2: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    apellido1: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    apellido2: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    direccion2: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
        Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
      ],
    ],
    celular: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(Expresion.CedulaTelefono),
      ],
    ],
    cedula: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(Expresion.CedulaTelefono),
      ],
    ],
    telefono: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(Expresion.CedulaTelefono),
      ],
    ],
    sexo: ['', [Validators.required]],
    FechaNacimiento: [''],
  });
  //LIMPIAR FORM
  limpiarForm() {
    this.formUsers.reset();
  }
  //TRANSFORMAR LOS DATOS
  getDataForm(latitud?: any, longitud?: any) {
    return {
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
      latitud,
      longitud,
    };
  }
  //SET DATA FORM
  setDatForm(respuesta: any) {
    this.formUsers.patchValue({
      id_usuario: respuesta.id_usuario,
      nombre1: respuesta.nombre1,
      nombre2: respuesta.nombre2,
      apellido1: respuesta.apellido1,
      apellido2: respuesta.apellido2,
      cedula: respuesta.cedula,
      direccion2: respuesta.datopersona.direccion2,
      telefono: respuesta.datopersona.telefono,
      celular: respuesta.datopersona.celular,
      sexo: respuesta.sexo,
      FechaNacimiento: respuesta.datopersona.fechanacimiento,
    }); //GUARDO EN EL FORM LO QUE TENGO DEL USUARIO
  }
}
