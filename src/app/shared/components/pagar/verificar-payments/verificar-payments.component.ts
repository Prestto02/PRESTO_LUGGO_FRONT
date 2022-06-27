import { Component, OnInit } from '@angular/core';
import { PagarServices } from '../services/Pagar.service';

@Component({
  selector: 'app-verificar-payments',
  templateUrl: './verificar-payments.component.html',
  styleUrls: ['./verificar-payments.component.css'],
})
export class VerificarPaymentsComponent implements OnInit {
  constructor(private apiServi: PagarServices) {}

  ngOnInit(): void {
    this.getHTMLPayments();
  }

  getHTMLPayments() {
    this.apiServi.resultHTML.subscribe((res) => {});
  }
}
