import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit{
  Linechart = []; 
    ngOnInit() {
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: "Chart",  
  
          datasets: [  
            {  
              data: "data",  
              borderColor: '#3cb371',  
              backgroundColor: "#0000FF",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    }
  }