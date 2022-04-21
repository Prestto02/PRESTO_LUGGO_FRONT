import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pastel-grafico',
  templateUrl: './pastel-grafico.component.html',
  styleUrls: ['./pastel-grafico.component.css'],
})
export class PastelGraficoComponent {
  //DATA
  single = [
    {
      name: 'Pollo',
      value: 8940200,
    },
    {
      name: 'carne',
      value: 5000000,
    },
    {
      name: 'Camaron',
      value: 7200000,
    },
    {
      name: 'Pescado',
      value: 6200000,
    },
  ];
  //DATA
  multi = [
    {
      name: 'Pollos',
      series: [
        {
          name: '1990',
          value: 62000000,
        },
        {
          name: '2010',
          value: 73000000,
        },
        {
          name: '2011',
          value: 89400000,
        },
      ],
    },
  ];
  //VISTA DEL TAMAÑO DEL GRAFICO WIDTH HEIGTH
  view: any[number] = [400, 350];
  viewLineal: any[number] = [450, 500];


  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'below';

  // options
  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme: any[string] = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    //Object.assign(this, { single });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDesactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
