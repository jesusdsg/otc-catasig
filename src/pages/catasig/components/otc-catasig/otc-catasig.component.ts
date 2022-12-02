import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { CatasigService } from '../../services/catasig.service';

@Component({
  selector: 'app-otc-catasig',
  templateUrl: './otc-catasig.component.html',
  styleUrls: ['./otc-catasig.component.scss'],
})
export class OtcCatasigComponent {
  public chart: any;
  public metroCuadradoChart: any;
  public tiposPrediosChart: any;

  visibleSpinner: boolean = false;
  totalDestiny: number = 0;

  tiposPredios: any[] = [
    { name: 'HABITACIONAL', code: 'HABITACIONAL', total: 17841 },
    { name: 'INDUSTRIAL', code: 'INDUSTRIAL', total: 2 },
    { name: 'COMERCIAL', code: 'COMERCIAL', total: 201 },
    { name: 'AGROPECUARIO', code: 'AGROPECUARIO', total: 2462 },
    { name: 'MINERO', code: 'MINERO', total: 0 },
    { name: 'CULTURAL', code: 'CULTURAL', total: 1 },
    { name: 'RECREACIONAL', code: 'RECREACIONAL', total: 5 },
    { name: 'SALUBRIDAD', code: 'SALUBRIDAD', total: 2 },
    { name: 'FORESTAL', code: 'FORESTAL', total: 0 },
  ];

  destinoPredios: any[] = [];

  selectedPredio: any[] = [];
  totalTiposPredios: any = {};

  data = {
    metroCuadrado: {
      averageAvaluo: 33341374,
      averageAreaTerreno: 18511,
      averageMetroCuadrado: 1801,
    },
    totales: {
      totalAvaluo: 30884,
      sumAvaluo: 1029715019000,
      sumAreaTerreno: 571702942,
    },
  };

  initChart() {
    this.visibleSpinner = true;
    /*
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
    });*/
    /* Init main charts to display */
    this.metroCuadradoChart = new Chart('chart-metro-cuadrado-average', {
      type: 'doughnut',
      data: {
        labels: ['Promedio', 'Total'],
        datasets: [
          {
            label: 'Avalúo predio',
            data: [
              this.data.metroCuadrado.averageAvaluo,
              this.data.totales.sumAvaluo,
            ],
            backgroundColor: ['#11aa68', '#3366cc'],
          },
          {
            label: 'Área terreno',
            data: [
              this.data.metroCuadrado.averageAreaTerreno,
              this.data.totales.sumAreaTerreno,
            ],
            backgroundColor: ['#A6F5C8', '#88dfff'],
          },
          {
            label: 'Metro cuadrado de predios del municipio',
            data: [
              this.data.metroCuadrado.averageMetroCuadrado,
              this.data.totales.totalAvaluo,
            ],
            backgroundColor: ['#EC5CF5', '#11aa68'],
          },
        ],
      },
      options: {
        aspectRatio: 2.0,
      },
    });

    this.tiposPrediosChart = new Chart('chart-tipos-predios', {
      type: 'bar',
      data: {
        labels: ['Rurales', 'Urbanos', 'Destino Predio'],
        datasets: [
          {
            label: 'Total',
            data: [4500, 18497, this.totalDestiny],
            backgroundColor: ['#11aa68', '#3366cc', '#EC5CF5'],
          },
        ],
      },
      options: {
        aspectRatio: 2.0,
      },
    });

    this.visibleSpinner = false;
  }

  constructor(private catasigService: CatasigService) {}

  destroyChart() {
    this.metroCuadradoChart.destroy();
    this.tiposPrediosChart.destroy();
  }

  getProperties() {
    this.catasigService.getRuralProperties().subscribe(
      async (response: any) => {
        console.log('Response ', response);
        this.totalTiposPredios.totalRural = await response.data.total;
      },
      (error) => {
        console.log('Error', error);
      }
    );
    this.catasigService.getUrbanProperties().subscribe(
      async (response: any) => {
        console.log('Response ', response);
        this.totalTiposPredios.totalUrbano = await response.data.total;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  filterDestiny(event: any) {
    this.totalDestiny = event.value.total;
    this.destroyChart();
    this.initChart();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.getProperties();
    this.initChart();
  }
}
