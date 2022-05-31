import { Component, OnInit } from '@angular/core';
import { SelectAtributosService } from '../configuracion-producto/select-atributos/services/select-atributos.service';
import { BaseFormAtributosConfig } from './models/BaseFormAtrtibutos';

@Component({
  selector: 'app-configuracion-productos-tercera',
  templateUrl: './configuracion-productos-tercera.component.html',
  styleUrls: ['./configuracion-productos-tercera.component.css'],
})
export class ConfiguracionProductosTerceraComponent implements OnInit {
  activarMensajeGlobal: boolean = false;
  activarMensajeColor: boolean = false;
  activarMensajeMaterial: boolean = false;
  mensajeEstadoActivar: boolean = false;
  activarModeloMensaje: boolean = false;
  arrayColores: any;
  arrayMateriales: any;
  constructor(
    public formB: BaseFormAtributosConfig,
    private apSelectAtributo: SelectAtributosService
  ) {}

  ngOnInit(): void {
    this.getAllColors();
    this.getMateriales();
  }

  //TRAEER TODOS LOS MATERIALES
  getMateriales() {
    this.apSelectAtributo.getMaterial().subscribe((res) => {
      this.arrayMateriales = res;
      console.log(this.arrayMateriales);
    });
  }
  //MENSAJE MODELO
  mensajeModelo() {
    this.activarModeloMensaje = !this.activarModeloMensaje;
  }
  //MENSAJE ESTADO
  mensajeEstado() {
    this.mensajeEstadoActivar = !this.mensajeEstadoActivar;
  }

  //MENSAJES INTUITUVO
  mensajeIntuitivo() {
    this.activarMensajeGlobal = !this.activarMensajeGlobal;
  }

  //MENSAJE MATERIAL
  mensajeMaterial() {
    this.activarMensajeMaterial = !this.activarMensajeMaterial;
  }

  //MENSAJE DE COLOR
  mensajeColor() {
    this.activarMensajeColor = !this.activarMensajeColor;
  }
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
}
