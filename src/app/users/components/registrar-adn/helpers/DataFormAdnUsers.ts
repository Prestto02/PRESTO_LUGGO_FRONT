import { Injectable } from '@angular/core';
import { BaseFormCategorias } from 'src/app/manager-vendedor/categorias/models/categorias.models';
import { BaseFormAdnUsers } from '../models/BaseFormAdnUser';
import { BaseFormNegocioAdn } from '../models/BaseFormNegocio';
import { BaseFormPagosAdn } from '../models/BaseFormPagosAdn';
import { BaseFormTerminarAdn } from '../models/BaseFormTerminar';
@Injectable({ providedIn: 'root' })
export class DataFormAdn {
  constructor(
    private formAdn: BaseFormAdnUsers,
    private formNegocioAdn: BaseFormNegocioAdn,
    private formPagosAdn: BaseFormPagosAdn,
    private formTerminarAdn: BaseFormTerminarAdn,
    private formCatego: BaseFormCategorias
  ) {}
  //OBTENGO TODOS LOS DATOS DEL FORM PARA ENVIARLO POR LA API
  getFormData(latitud: any, longitud: any) {
    this.formPagosAdn.getByteTipoCuenta();
    this.formNegocioAdn.getBooleanSucursales();
    return {
      user: this.formAdn.formAdn.get('user')?.value,
      pass: this.formAdn.formAdn.get('pass')?.value,
      Longitud: longitud,
      Latitud: latitud,
      Datos_Pago: {
        Id_banco: this.formPagosAdn.formPagoAdn.get('Id_banco')?.value,
        Numero_cuenta:
          this.formPagosAdn.formPagoAdn.get('Numero_cuenta')?.value,
        Identificacion:
          this.formPagosAdn.formPagoAdn.get('Identificacion')?.value,
        Nombre_Titular:
          this.formPagosAdn.formPagoAdn.get('Nombre_Titular')?.value,
        email: this.formPagosAdn.formPagoAdn.get('correo_Electronico')?.value,
        Tipo_cuenta: this.formPagosAdn.formPagoAdn.get('Tipo_cuenta')?.value,
      },

      Persona_: {
        Cedula: this.formAdn.formAdn.get('Cedula')?.value,
        NombreCompleto: this.formAdn.formAdn.get('NombreCompleto')?.value,
      },

      DatosAdn: {
        Ruc: this.formAdn.formAdn.get('Ruc')?.value,
        Razon_Social: this.formAdn.formAdn.get('Razon_Social')?.value,
        Inicio_actividades:
          this.formAdn.formAdn.get('Inicio_actividades')?.value,

        Nombre_tienda:
          this.formNegocioAdn.formNegocioAdn.get('Nombre_Tienda')?.value,
        Ciudad: this.formNegocioAdn.formNegocioAdn.get('Ciudad')?.value,
        Pais: this.formNegocioAdn.formNegocioAdn.get('Pais')?.value,
        Direccion: this.formNegocioAdn.formNegocioAdn.get('Direccion')?.value,
        Sucursales: this.formNegocioAdn.formNegocioAdn.get('Sucursales')?.value,
        Telefono_contacto:
          this.formNegocioAdn.formNegocioAdn.get('Telefono_contacto')?.value,
        descripcion_outline: this.formNegocioAdn.formNegocioAdn.get(
          'descripcion_outline'
        )?.value,

        CategoriaAdn: this.formCatego.getFormData(),

        Direccion_origen:
          this.formTerminarAdn.formTerminar.get('DondeEres')?.value,
        Descripcion_Adn:
          this.formTerminarAdn.formTerminar.get('ComoTeDescribes')?.value,
        Fecha_Nacimiento:
          this.formTerminarAdn.formTerminar.get('FechaNacimiento')?.value,
      },
    };
  }
}
