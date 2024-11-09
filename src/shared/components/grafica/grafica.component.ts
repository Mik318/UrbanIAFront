import { Component } from '@angular/core';
import {ChartData, ChartOptions} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-grafica',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './grafica.component.html',
  styleUrl: './grafica.component.scss'
})
export class GraficaComponent {
  public chartData: ChartData<"line"> = {
    labels: ['Ruta 1', 'Ruta 2', 'Ruta 3'],
    datasets: [
      {
        label: 'Ascendente Maximo',
        data: [25, 40, 10],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Descendente Maximo',
        data: [30, 35, 20],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Ocupabilidad Maxima',
        data: [55, 75, 30],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Nombre de la Ruta'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Valor'
        }
      }
    }
  };
}
