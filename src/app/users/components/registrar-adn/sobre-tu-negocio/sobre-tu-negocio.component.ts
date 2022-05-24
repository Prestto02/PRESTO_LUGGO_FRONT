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
  buscarCiudad(e: any) {
    const codigo = e.target.value;
    this.apiCiudadPais.getCiudades(codigo).subscribe((res) => {
      this.arrayCiudad = res;
    });
  }
}
