import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css'],
})
export class GraficoBarrasComponent {
  //DATA
  multi = [
    {
      codigo: '12122',
      name: 'Maquillaje',
      series: [
        {
          name: 'Marzo',
          value: 7300000,
        },
        {
          name: 'Abril',
          value: 8940000,
        },
      ],
    },

    {
      codigo: '78922',
      name: 'Computadora',
      series: [
        {
          name: 'Marzo',
          value: 7870000,
        },
        {
          name: 'Abril',
          value: 8270000,
        },
      ],
    },

    {
      codigo: '654122',
      name: 'Audifonos',
      series: [
        {
          name: 'Marzo',
          value: 5000002,
        },
        {
          name: 'Abril',
          value: 5800000,
        },
      ],
    },

    {
      codigo: '34222',
      name: 'Iphone XS',
      series: [
        {
          name: 'Marzo',
          value: 7000002,
        },
        {
          name: 'Abril',
          value: 6800000,
        },
      ],
    },

    {
      codigo: '12162',
      name: 'Ropa',
      series: [
        {
          name: 'Marzo',
          value: 4000002,
        },
        {
          name: 'Abril',
          value: 9800000,
        },
      ],
    },
  ];
  view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Productos';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Ganancias';
  legendTitle: string = 'Mes';

  colorScheme: any[string] = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    //Object.assign(this, { multi })
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
  //ACTUALIZAR DATOS
  actualizarBarras() {
    this.cambiarDatosBarra();
  }
  //CAMBIAR LOS DATOS
  cambiarDatosBarra() {
    this.multi = [
      {
        codigo: '12122',
        name: 'Maquillaje',
        series: [
          {
            name: 'Marzo',
            value: Math.random() * 10000,
          },
          {
            name: 'Abril',
            value: Math.random() * 10000,
          },
        ],
      },

      {
        codigo: '78922',
        name: 'Computadora',
        series: [
          {
            name: 'Marzo',
            value: Math.random() * 10000,
          },
          {
            name: 'Abril',
            value: Math.random() * 10000,
          },
        ],
      },

      {
        codigo: '654122',
        name: 'Audifonos',
        series: [
          {
            name: 'Marzo',
            value: Math.random() * 10000,
          },
          {
            name: 'Abril',
            value: Math.random() * 10000,
          },
        ],
      },

      {
        codigo: '12122',
        name: 'Audifonos',
        series: [
          {
            name: 'Marzo',
            value: Math.random() * 10000,
          },
          {
            name: 'Abril',
            value: Math.random() * 10000,
          },
        ],
      },

      {
        codigo: '34222',
        name: 'Iphone XS',
        series: [
          {
            name: 'Marzo',
            value: Math.random() * 10000,
          },
          {
            name: 'Abril',
            value: Math.random() * 10000,
          },
        ],
      },

      {
        codigo: '12162',
        name: 'Ropa',
        series: [
          {
            name: 'Marzo',
            value: Math.random() * 10000,
          },
          {
            name: 'Abril',
            value: Math.random() * 10000,
          },
        ],
      },
    ];
  }
}
