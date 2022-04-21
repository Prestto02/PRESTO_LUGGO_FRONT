import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sparklines-lineal',
  templateUrl: './sparklines-lineal.component.html',
  styleUrls: ['./sparklines-lineal.component.css'],
})
export class SparklinesLinealComponent {
  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '1990',
          value: 62000000,
        },
        {
          name: '1991',
          value: 73000000,
        },
        {
          name: '1992',
          value: 32100000,
        },
        {
          name: '1993',
          value: 41500000,
        },
        {
          name: '1994',
          value: 48900000,
        },
        {
          name: '1995',
          value: 51400000,
        },
        {
          name: '2000',
          value: 53300000,
        },
        {
          name: '2005',
          value: 42000000,
        },
        {
          name: '2010',
          value: 44400000,
        },
        {
          name: '2015',
          value: 51400000,
        },
        {
          name: '2019',
          value: 57000000,
        },
        {
          name: '2020',
          value: 89400000,
        },
        {
          name: '2021',
          value: 89400000,
        },
      ],
    },
  ];
  view: any[number] = [160, 200];

  // options
  animations: boolean = true;
  timeline: boolean = true;

  colorScheme: any[string] = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor() {
    //Object.assign(this, { multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
