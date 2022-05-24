import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordsMustBeEqual } from './passwordEquaslAdn';
@Injectable({ providedIn: 'root' })
export class BaseFormAdnUsers {
  constructor(private formB: FormBuilder) {}

  formAdn = this.formB.group(
    {
      user: ['', [Validators.required, Validators.email]],
      pass: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
        ],
      ],
      contrasena_conf: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
        ],
      ],
      Ruc: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]],
      Razon_Social: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
        ],
      ],
      Inicio_actividades: ['', [Validators.required]],
    },
    { validator: passwordsMustBeEqual }
  );
  //OBTENGO TODOS LOS DATOS DEL FORM PARA ENVIARLO POR LA API
  getFormData(latitud: any, longitud: any) {
    this.tranformBoolean();
    return {
      user: this.formAdn.get('user')?.value,
      pass: this.formAdn.get('pass')?.value,
      Datos_Pago: {
        Id_banco: this.formAdn.get('Id_banco')?.value,
        Numero_cuenta: this.formAdn.get('Numero_cuenta')?.value,
      },
      DatosAdn: {
        Ruc: this.formAdn.get('Ruc')?.value,
        Razon_Social: this.formAdn.get('Razon_Social')?.value,
        Nombre_Tienda: this.formAdn.get('Nombre_Tienda')?.value,
        IdTributario: this.formAdn.get('IdTributario')?.value,
        descripcion_outline: this.formAdn.get('descripcion_outline')?.value,
        Direccion: this.formAdn.get('Direccion')?.value,
        Ciudad: this.formAdn.get('Ciudad')?.value,
        Pais: this.formAdn.get('Pais')?.value,
        Sucursales: this.formAdn.get('Sucursales')?.value,
        Telefono_contacto: this.formAdn.get('Telefono_contacto')?.value,
        Descripcion_Adn: this.formAdn.get('Descripcion_Adn')?.value,
      },
      Longitud: longitud,
      Latitud: latitud,
    };
  }
  //TRANSFORMAR A BOOLEAN
  tranformBoolean() {
    if (this.formAdn.get('IdTributario')?.value === 'true')
      this.formAdn.patchValue({
        IdTributario: true,
      });
    else
      this.formAdn.patchValue({
        IdTributario: false,
      });
    //SUCURSALES
    if (this.formAdn.get('Sucursales')?.value === 'true')
      this.formAdn.patchValue({
        Sucursales: true,
      });
    else
      this.formAdn.patchValue({
        Sucursales: false,
      });
  }
}
