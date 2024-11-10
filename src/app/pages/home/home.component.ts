import { Component, OnInit } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardModule
} from "@angular/material/card";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import {MatProgressBar, MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {CalendarioComponent} from "../../../shared/components/calendario/calendario.component";
import {CommonModule, NgForOf} from "@angular/common";
import {GraficaComponent} from "../../../shared/components/grafica/grafica.component";
import {MapaCalorComponent} from "../../../shared/components/mapa-calor/mapa-calor.component";
import data from '../../../shared/assets/analisis_data.json';
import {
  PieController,
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  Tooltip,
  Title
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

// Registrar las escalas, controladores y otros componentes necesarios de Chart.js
Chart.register(PieController, CategoryScale, Title, Tooltip, Legend)

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatDivider,
    MatCardActions,
    MatCardFooter,
    MatProgressBar,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    CalendarioComponent,
    MatProgressBarModule,
    CommonModule,
    GraficaComponent,
    MapaCalorComponent,
    BaseChartDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public chartData?: ChartData<'pie'>;
  secciones: any


  ngOnInit(){
    this.secciones = data.secciones
    console.log(this.secciones)
    this.chartData = {
      labels: ['Ruta 1', 'Ruta 2', 'Ruta 3', 'Ruta 4'],
      datasets: [
        {
          // data: [40, 30, 20, 10],
          // backgroundColor: [
          //   'rgb(255, 99, 132)',
          //   'rgb(54, 162, 235)',
          //   'rgb(255, 205, 86)',
          //   'rgb(25, 105, 20)'
          // ],
          data: [40], label:'Ruta 1', backgroundColor: 'rgb(255, 99, 132)'
        }
      ]
    }
  }

  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title : {
        display: true,
        text: 'Grafica de pastel'
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            // Personaliza el texto del tooltip si lo deseas
            return tooltipItem.raw + '%';
          },
        },
      },
    },
  }


  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public pieChartLabels: string[] = ['Ruta 1', 'Ruta 2', 'Ruta 3', 'Ruta 4'];  // Las rutas
  // public pieChartData: number[] = [40, 30, 20, 10];  // Los valores ficticios de camiones por ruta
  // public pieChartType: string = 'pie';

  recomendaciones = ['Recomendación 1']

  total: number = 100; // Capacidad total disponible
  ocupados: number = 75; // Número de unidades ocupadas

  get ocupabilidad(): number {
    // Calcula el porcentaje de ocupabilidad (ocupados/total * 100)
    return (this.ocupados / this.total) * 100;
  }
}
