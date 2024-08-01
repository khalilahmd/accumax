import { Component, OnInit, Input } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements OnInit {

  barChartData: any = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { 
        data: [65, 59, 80, 81, 56, 55, 92], 
        label: 'Total',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 5 
      }
    ]
  };;
  barChartOptions: any = {
    responsive: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true
      }
    }
  };

  constructor() {
  }

  ngOnInit(): void {
    
  }
}
