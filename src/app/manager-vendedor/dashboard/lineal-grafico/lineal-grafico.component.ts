import { Component } from '@angular/core';

@Component({
  selector: 'app-lineal-grafico',
  templateUrl: './lineal-grafico.component.html',
  styleUrls: ['./lineal-grafico.component.css'],
})
export class LinealGraficoComponent {
  multi = [
    {
      name: 'Pan',
      series: [
        {
          name: 'Marzo',
          value: 62000000,
        },
        {
          name: 'Abril',
          value: 73000000,
        },
        {
          name: 'Mayo',
          value: 89400000,
        },
      ],
    },

    {
      name: 'Chocolate',
      series: [
        {
          name: 'Marzo',
          value: 250000000,
        },
        {
          name: 'Abril',
          value: 309000000,
        },
        {
          name: 'Mayo',
          value: 311000000,
        },
      ],
    },

    {
      name: 'Nueces',
      series: [
        {
          name: 'Marzo',
          value: 58000000,
        },
        {
          name: 'Abril',
          value: 50000020,
        },
        {
          name: 'Mayo',
          value: 58000000,
        },
      ],
    },
    {
      name: 'Mantequilla',
      series: [
        {
          name: 'Marzo',
          value: 57000000,
        },
        {
          name: 'Marzo',
          value: 62000000,
        },
      ],
    },
  ];
  view: any[number] = [1550, 500];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Meses';
  yAxisLabel: string = 'Popular';
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
