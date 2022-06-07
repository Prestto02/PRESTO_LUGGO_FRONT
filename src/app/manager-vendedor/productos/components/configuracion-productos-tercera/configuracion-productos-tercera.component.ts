import { Component, OnInit } from '@angular/core';
import { SelectAtributosService } from '../configuracion-producto/select-atributos/services/select-atributos.service';
import { BaseFormAtributosConfig } from './models/BaseFormAtrtibutos';

@Component({
  selector: 'app-configuracion-productos-tercera',
  templateUrl: './configuracion-productos-tercera.component.html',
  styleUrls: ['./configuracion-productos-tercera.component.css'],
})
export class ConfiguracionProductosTerceraComponent implements OnInit {
  activarCheck: boolean = false;
  libras: any = '';
  gramos: any = '';
  arrayColores: any;
  arrayMateriales: any;
  constructor(
    public formB: BaseFormAtributosConfig,
    private apSelectAtributo: SelectAtributosService
  ) {}

  ngOnInit(): void {
    this.getAllColors();
    /*    this.getMateriales(); */
  }

  //TRAEER TODOS LOS MATERIALES
  /*   getMateriales() {
    this.apSelectAtributo.getMaterial().subscribe((res) => {
      this.arrayMateriales = res;
    });
  } */
  //TODOS LOS ATRIBUTOS
  getAllColors() {
    this.apSelectAtributo.getColorsAtributos().subscribe((res) => {
      this.arrayColores = res;
    });
  }
  //AGREGAR NUEVOS COLORES
  addColores(id: any, e: any, nombre: any) {
    if (e.target.checked) this.formB.addColores(id, nombre);
    else this.formB.removeCheckColors(id);
  }
  //TRANSFORMACION DE KILOGRAMOS EN LIBRAS Y ONZAS
  transformarALBYGR(e: any) {
    const datos = e.target.value;
    this.libras = datos * (2.2046 / 1);
    this.gramos = datos * (1000 / 1);
  }
  //TRANSFORMAR DE LIBRAS A KILOGRAMOS A GRAMOS
  transformarAKGYGR(e: any) {
    const datos = e.target.value;
    this.formB.formAtributos.patchValue({
      Peso: {
        peso: datos * (1 / 2.2046),
      },
    });
    this.gramos = datos * (453.59 / 1);
  }
  //TRANFORMAR DE GRAMOS EN LIBRAS Y KILOGRAMOS
  transformarALibrasYKG(e: any) {
    const datos = e.target.value;
    this.libras = datos * (1 / 453.59);
    this.formB.formAtributos.patchValue({
      Peso: {
        peso: datos * (0.001 / 1),
      },
    });
  }
}
