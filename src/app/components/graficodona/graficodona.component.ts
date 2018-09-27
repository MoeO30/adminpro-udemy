import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  // styleUrls: ['./graficodona.component.css']
})
export class GraficodonaComponent implements OnInit {



  @Input('ChartLabels') public doughnutChartLabels: string[] = [];
  @Input('ChartData') public doughnutChartData: number[] = [];
  @Input('ChartType') public doughnutChartType: string = '';


  constructor() { }

  ngOnInit() {
  }

}
