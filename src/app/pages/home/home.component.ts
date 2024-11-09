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
import {CalendarioComponent} from "../calendario/calendario.component";

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
    CalendarioComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
