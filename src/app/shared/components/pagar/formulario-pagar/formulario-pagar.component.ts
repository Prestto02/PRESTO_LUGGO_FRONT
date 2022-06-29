import { Component, OnInit } from '@angular/core';
import { CiudadPaisService } from 'src/app/users/components/registrar-adn/services/ciudad-pais.service';
import { BaseFormPagar } from './models/BaseFormPagar';

@Component({
  selector: 'app-formulario-pagar',
  templateUrl: './formulario-pagar.component.html',
  styleUrls: ['./formulario-pagar.component.css'],
})
export class FormularioPagarComponent implements OnInit {
  arrayCodigosPaises: any = [];
  codigo_phone = '593';
  constructor(
    public formB: BaseFormPagar,
    private apiCiudadPais: CiudadPaisService //SERVICES CIUDAD PAISES
  ) {}

  ngOnInit(): void {
    this.getPaisCodigo();
  }
  getPaisCodigo() {
    this.apiCiudadPais.getPaises().subscribe((res) => {
      this.arrayCodigosPaises = res;
    });
  }
}
