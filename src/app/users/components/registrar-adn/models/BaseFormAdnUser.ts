import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormAdnUsers {
  constructor(private formB: FormBuilder) {}

  formAdn = this.formB.group({
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
    Id_banco: ['', [Validators.required]],
    Numero_cuenta: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    Ruc: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]],
    Razon_Social: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ],
    Nombre_Tienda: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ],
    IdTributario: [false, [Validators.required]],
    descripcion_outline: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ],
    Direccion: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ],
    Ciudad: ['', [Validators.required]],
    Pais: ['', [Validators.required]],
    Sucursales: [false, [Validators.required]],
    Telefono_contacto: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/[0-9]{2}[0-9]{8}/),
      ],
    ],
    Descripcion_Adn: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ],
  });
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
