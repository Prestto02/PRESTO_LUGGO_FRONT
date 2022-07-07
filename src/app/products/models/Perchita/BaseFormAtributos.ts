import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';

@Injectable({ providedIn: 'root' })
export class DetalleArticuloForm {
  constructor(private form: FormBuilder) {}
  DetalleArticulo = this.form.array(
    [this.formDetallesArticulo()],
    [Validators.required]
  );

  formDetallesArticulo() {
    let form = this.form.group({
      StockMinimo: [
        0,
        [Validators.required, Validators.pattern(Expresion.SoloNumeros)],
      ],
      StockItems: [
        0,
        [Validators.required, Validators.pattern(Expresion.SoloNumeros)],
      ],
      PrecioPorVariacion: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
      atributes: this.formAtributesDetalles(),
    });
    return form;
  }

  formAtributesDetalles() {
    let atributes = this.form.group({
      Estado_Producto: [
        '',
        [
          Validators.required,
          Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
        ],
      ],
      Color_articulo: this.colorsForm(),
      Material_Constituido: this.materialConstituidoForm(),
      Peso: this.pesoForm(),
      Potencia: this.potenciaForm(),
      Tamaño_articulo: this.tamañoForm(),
      modelo: [
        '',
        [
          Validators.required,
          Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
        ],
      ],
      Capacidad: this.capacidadForm(),
    });
    return atributes;
  }
  //POTENCIA FORM
  potenciaForm() {
    let potencia = this.form.group({
      Potencia_valor: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
    });
    return potencia;
  }
  colorsForm() {
    let colors = this.form.group({
      Id_Color: ['', [Validators.required]],
    });
    return colors;
  }
  materialConstituidoForm() {
    let material = this.form.group({
      nombre_material: [
        '',
        [
          Validators.required,
          Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
        ],
      ],
    });
    return material;
  }
  //PESO DEL PRODUCTO
  pesoForm() {
    let peso = this.form.group({
      peso: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
    });
    return peso;
  }
  capacidadForm() {
    let capacidad = this.form.group({
      Cantidad: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
    });
    return capacidad;
  }
  //TAMAÑO FORM
  tamañoForm() {
    let tamano = this.form.group({
      Longitud_x: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
      Longitud_y: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
      Longitud_z: [
        '',
        [Validators.required, Validators.pattern(Expresion.DimensionConComa)],
      ],
    });
    return tamano;
  }
}
