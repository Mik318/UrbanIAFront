import { Component } from '@angular/core';
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
import {ChartData, ChartOptions, ChartType} from "chart.js";
import {MapaCalorComponent} from "../../../shared/components/mapa-calor/mapa-calor.component";

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
    MapaCalorComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  recomendaciones = ['Recomendación 1']

  total: number = 100; // Capacidad total disponible
  ocupados: number = 75; // Número de unidades ocupadas

  get ocupabilidad(): number {
    // Calcula el porcentaje de ocupabilidad (ocupados/total * 100)
    return (this.ocupados / this.total) * 100;
  }
}
