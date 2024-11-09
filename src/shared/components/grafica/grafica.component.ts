import { Component, OnInit } from '@angular/core';
import {
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  LineController,
  PointElement, LineElement
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

// Registrar las escalas, controladores y otros componentes necesarios de Chart.js
Chart.register(LinearScale, CategoryScale, Title, Tooltip, Legend, LineController, PointElement, LineElement);

@Component({
  selector: 'app-grafica',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {
  public chartData?: ChartData<'line'>;

  ngOnInit() {
    this.chartData = {
      labels: ['Ruta 1', 'Ruta 2', 'Ruta 3'], // Etiquetas del eje X
      datasets: [
        { data: [65, 59, 80], label: 'Porcentaje de Accidentes' },
        { data: [28, 48, 40], label: 'Porcentaje de Fallas' },
        { data: [28, 48, 40], label: 'Porcentaje de Incendios' },
      ],
    };
  }

  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Nombre de la Ruta',
        },
        type: 'category',  // Escala de tipo categoría para el eje X
      },
      y: {
        title: {
          display: true,
          text: 'Valor',
        },
        type: 'linear',  // Escala de tipo lineal para el eje Y
      },
    },
  };
}
