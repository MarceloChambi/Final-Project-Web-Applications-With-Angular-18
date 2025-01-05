import { Component } from '@angular/core';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

@Component({
  selector: 'app-end-point-consumption',
  templateUrl: './end-point-consumption.component.html',
  styleUrl: './end-point-consumption.component.scss',
  standalone: true,
  imports: [DashboardComponent],
})
export class EndPointConsumptionComponent { }
