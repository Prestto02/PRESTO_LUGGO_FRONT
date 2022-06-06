import { Component, OnInit } from '@angular/core';
import { BaseFormPagosAdn } from '../models/BaseFormPagosAdn';
import { BancoService } from '../services/banco.service';

@Component({
  selector: 'app-tus-pagos',
  templateUrl: './tus-pagos.component.html',
  styleUrls: ['./tus-pagos.component.css'],
})
export class TusPagosComponent implements OnInit {
  arrayBanco: any = [];
  ocultar: boolean = true;
  constructor(
    public formB: BaseFormPagosAdn,
    private apiBanco: BancoService //SERVICES BANCO
  ) {}

  ngOnInit(): void {
    this.getAllBancos();
  }

  //TRAER TODOS LOS BANCOS
  getAllBancos() {
    this.apiBanco.getAllBancos().subscribe((res) => {
      this.arrayBanco = res;
    });
  }

  onKeyPress(e: any) {
    if (e.target.value.length >= 1) {
      this.ocultar = false;
    } //MOSTRAR
    if (e.target.value.length <= 0) {
      this.ocultar = true;
    } //OCULTAR
  }

  setBanco(id: any, nombre: any) {
    this.formB.formPagoAdn.patchValue({
      Nombre_Banco: nombre,
      Id_banco: id,
    });
  }
}
