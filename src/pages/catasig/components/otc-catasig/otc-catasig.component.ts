import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-otc-catasig',
  templateUrl: './otc-catasig.component.html',
  styleUrls: ['./otc-catasig.component.scss'],
})
export class OtcCatasigComponent {
  public chart: any;

  initChart() {
    this.chart = new Chart('chart-base', {
      type: 'scatter', //Type of chart we need to use (Bar in this case)
      data: {
        labels: ['2022', '2021'],
        datasets: [
          {
            label: 'Muertes en el año',
            data: ['467', '450', '344'],
            backgroundColor: '#11aa68',
          },
          {
            label: 'Muertes por accidentes de tránsito',
            data: ['550', '323', '678'],
            backgroundColor: '#f1f0f0',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  };


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initChart();
  }

}
