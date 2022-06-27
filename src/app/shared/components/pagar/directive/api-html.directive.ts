import { Directive, ElementRef, OnInit } from '@angular/core';
import { PagarServices } from '../services/Pagar.service';

@Directive({
  selector: '[appApiHtml]',
})
export class ApiHtmlDirective implements OnInit {
  htmlInsert: string = '';
  constructor(private element: ElementRef, private apiPagar: PagarServices) {}
  ngOnInit(): void {
    this.getDataApiPayments();
  }

  getDataApiPayments() {
    const element = this.element.nativeElement;
    this.apiPagar.resultHTML.subscribe((res) => {
      this.htmlInsert = res;
      console.log(res);
    });
    element.innerHTML = this.htmlInsert;
  }
}
