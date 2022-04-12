import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
        Validators.pattern(/^[A-Za-z0-9 ]+$/),
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
    console.log(respuesta);
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
