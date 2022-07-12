import { Component, Input, OnInit } from '@angular/core';
import { BaseFormNegocioAdn } from '../models/BaseFormNegocio';
import { CiudadPaisService } from '../services/ciudad-pais.service';

@Component({
  selector: 'app-sobre-tu-negocio',
  templateUrl: './sobre-tu-negocio.component.html',
  styleUrls: ['./sobre-tu-negocio.component.css'],
})
export class SobreTuNegocioComponent implements OnInit {
  arrayPais: any = [];
  arrayCiudad: any = [];
  ocultarPais: boolean = true;
  ocultarCiudad: boolean = true;
  constructor(
    private apiCiudadPais: CiudadPaisService, //SERVICES CIUDAD PAISES
    public formB: BaseFormNegocioAdn //FORM BASE NEGOCIO ADN
  ) {}

  ngOnInit(): void {
    this.getAllPaises();
  }

  //TRAER TODOS LOS PAISES
  getAllPaises() {
    this.apiCiudadPais.getPaises().subscribe((res) => {
      this.arrayPais = res;
    });
  }
  //TRAER TODAS LAS CIUDADES
  buscarCiudad(siglasPais: any, nombrePais: any) {
    this.formB.formNegocioAdn.patchValue({
      Pais: nombrePais,
    });
    this.apiCiudadPais.getCiudades(siglasPais).subscribe((res) => {
      this.arrayCiudad = res;
    });
  }
  setCiudad(nombreCiudad: any) {
    this.formB.formNegocioAdn.patchValue({
      Ciudad: nombreCiudad,
    });
  }
  onKeyPressCiudad(e: any) {
    if (e.target.value.length >= 1) {
      this.ocultarCiudad = false;
    } //MOSTRAR
    if (e.target.value.length <= 0) {
      this.ocultarCiudad = true;
    } //OCULTAR
  }
  onKeyPres(e: any) {
    if (e.target.value.length >= 1) {
      this.ocultarPais = false;
    } //MOSTRAR
    if (e.target.value.length <= 0) {
      this.ocultarPais = true;
    } //OCULTAR
  }

  ocultarTodo() {
    this.ocultarCiudad = true;
    this.ocultarPais = true;
  }
}
