import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Totalproc } from './totalproces';
import { MetricesService } from './metrices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  public processnot : Totalproc[] =[];
  public doughnutChartLabels: Label[] = ['Completed process', 'Failed process', 'In Progress process'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor(private metservice : MetricesService,private router : Router) {
    
   }

  ngOnInit() {
    this.metservice.get_products().subscribe((res)=>{
      this.processnot=res;
       
    });
  }

  loadclk(){
    this.router.navigate(['show-process'])
  }
}
