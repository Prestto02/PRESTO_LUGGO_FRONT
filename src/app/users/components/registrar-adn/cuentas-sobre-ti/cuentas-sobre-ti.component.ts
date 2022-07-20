import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuentas-sobre-ti',
  templateUrl: './cuentas-sobre-ti.component.html',
  styleUrls: ['./cuentas-sobre-ti.component.css'],
})
export class CuentasSobreTiComponent implements OnInit {
  @Input('formB') formAdn: any | null = null;
  constructor() {}

  ngOnInit(): void {}

  //CHECKED RUC O CEDULA
  checkedRucCedula(e: any) {
    //CONSULTO SI VIENE EL RUC O CEDULA
    if (e.target.checked && e.target.value === 'Ruc') {
      this.formAdn.patchValue({
        CedulaCheck: '',
        Ruc: '',
        Razon_Social: '',
      });
      this.formAdn.removeValidateCedulaNombre();
      this.formAdn.setValidatorsRucCompleto();
    }
    if (e.target.checked && e.target.value === 'cedula') {
      this.formAdn.patchValue({
        RucCheck: '',
        Cedula: '',
        NombreCompleto: '',
      });
      this.formAdn.removeValidateRuc();
      this.formAdn.setValidatorsCedulaNombreCompleto();
    }
  }
}
