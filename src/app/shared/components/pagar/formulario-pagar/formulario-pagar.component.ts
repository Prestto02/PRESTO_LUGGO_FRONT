import { Component, OnInit } from '@angular/core';
import { BaseFormPagar } from './models/BaseFormPagar';

@Component({
  selector: 'app-formulario-pagar',
  templateUrl: './formulario-pagar.component.html',
  styleUrls: ['./formulario-pagar.component.css'],
})
export class FormularioPagarComponent implements OnInit {
  arrayCodigosPaises: any = [
    {
      id: 1,
      Name: 'Ecuador',
      Codigo: '+593',
      icons:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bandera_Del_Ecuador.jpg/1200px-Bandera_Del_Ecuador.jpg',
    },
    {
      id: 2,
      Name: 'Colombia',
      Codigo: '+57',
      icons:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png',
    },
    {
      id: 3,
      Name: 'Argentina',
      Codigo: '+54',
      icons:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png',
    },
    {
      id: 4,
      Name: 'Bolivia',
      Codigo: '+591',
      icons:
        'https://si-educa.net/wp-content/uploads/2013/08/Bandera-Bolivia.jpg',
    },
  ];
  constructor(public formB: BaseFormPagar) {}

  ngOnInit(): void {}
}
