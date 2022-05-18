import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormAdnUsers {
  constructor(private formB: FormBuilder) {}

  formAdn = this.formB.group({
    user: ['', [Validators.required]],
    pass: ['', [Validators.required]],
    Id_banco: [''],
    Numero_cuenta: ['', [Validators.required]],
    Ruc: ['', [Validators.required]],
    Razon_Social: ['', [Validators.required]],
    Nombre_Tienda: ['', [Validators.required]],
    IdTributario: [true],
    descripcion_outline: [''],
    Direccion: ['', [Validators.required]],
    Ciudad: ['', [Validators.required]],
    Pais: ['', [Validators.required]],
    Sucursales: ['', [Validators.required]],
    Telefono_contacto: ['', [Validators.required]],
    Descripcion_Adn: ['', [Validators.required]],
  });

  getFormData() {
    return {
      user: this.formAdn.get('user')?.value,
      pass: this.formAdn.get('pass')?.value,
      Datos_Pagos: {
        Id_banco: [''],
        Numero_cuenta: this.formAdn.get('Numero_cuenta')?.value,
      },
      DatosAdn: {
        Ruc: this.formAdn.get('Ruc')?.value,
        Razon_Social: this.formAdn.get('Razon_Social')?.value,
        Nombre_Tienda: this.formAdn.get('Nombre_Tienda')?.value,
        IdTributario: [true],
        descripcion_outline: [''],
        Direccion: this.formAdn.get('Direccion')?.value,
        Ciudad: this.formAdn.get('Ciudad')?.value,
        Pais: this.formAdn.get('Pais')?.value,
        Sucursales: this.formAdn.get('Sucursales')?.value,
        Telefono_contacto: this.formAdn.get('Telefono_contacto')?.value,
        Descripcion_Adn: this.formAdn.get('Descripcion_Adn')?.value,
      },
      Longitud: '',
      Latitud: '',
    };
  }
}
