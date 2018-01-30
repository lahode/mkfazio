import { Component } from '@angular/core';

@Component({
  selector: 'app-company-chart',
  templateUrl: './company-chart.component.html',
  styleUrls: ['./company-chart.component.scss']
})
export class CompanyChartComponent {

  public options: Object;
  private data = [
    [1477958400000, 111.49],
    [1478044800000, 111.59],
    [1478131200000, 109.83],
    [1478217600000, 108.84],
    [1478476800000, 110.41],
    [1478563200000, 111.06],
    [1478649600000, 110.88],
    [1478736000000, 107.79],
    [1478822400000, 108.43],
    [1479081600000, 105.71],
    [1479168000000, 107.11],
    [1479254400000, 109.99],
    [1479340800000, 109.95],
    [1479427200000, 110.06],
    [1479686400000, 111.73],
    [1479772800000, 111.80],
    [1479859200000, 111.23],
    [1480032000000, 111.79],
    [1480291200000, 111.57],
    [1480377600000, 111.46],
    [1480464000000, 110.52],
    /* Dec 2016 */
    [1480550400000, 109.49],
    [1480636800000, 109.90],
    [1480896000000, 109.11],
    [1480982400000, 109.95],
    [1481068800000, 111.03],
    [1481155200000, 112.12],
    [1481241600000, 113.95],
    [1481500800000, 113.30],
    [1481587200000, 115.19],
    [1481673600000, 115.19],
    [1481760000000, 115.82],
    [1481846400000, 115.97],
    [1482105600000, 116.64],
    [1482192000000, 116.95],
    [1482278400000, 117.06],
    [1482364800000, 116.29],
    [1482451200000, 116.52],
    [1482796800000, 117.26],
    [1482883200000, 116.76],
    [1482969600000, 116.73],
    [1483056000000, 115.82],
    /* Jan 2017 */
    [1483401600000, 116.15],
    [1483488000000, 116.02],
    [1483574400000, 116.61],
    [1483660800000, 117.91],
    [1483920000000, 118.99],
    [1484006400000, 119.11],
    [1484092800000, 119.75],
    [1484179200000, 119.25],
    [1484265600000, 119.04],
    [1484611200000, 120.00],
    [1484697600000, 119.99],
    [1484784000000, 119.78],
    [1484870400000, 120.00],
    [1485129600000, 120.08],
    [1485216000000, 119.97],
    [1485302400000, 121.88],
    [1485388800000, 121.94],
    [1485475200000, 121.95],
    [1485734400000, 121.63],
    [1485820800000, 121.35],
    /* Feb 2017 */
    [1485907200000, 128.75],
    [1485993600000, 128.53],
    [1486080000000, 129.08],
    [1486339200000, 130.29],
    [1486425600000, 131.53],
    [1486512000000, 132.04],
    [1486598400000, 132.42],
    [1486684800000, 132.12],
    [1486944000000, 133.29],
    [1487030400000, 135.02],
    [1487116800000, 135.51],
    [1487203200000, 135.34],
    [1487289600000, 135.72],
    [1487635200000, 136.70],
    [1487721600000, 137.11],
    [1487808000000, 136.53],
    [1487894400000, 136.66],
    [1488153600000, 136.93],
    [1488240000000, 136.99],
    /* Mar 2017 */
    [1488326400000, 139.79],
    [1488412800000, 138.96],
    [1488499200000, 139.78],
    [1488758400000, 139.34],
    [1488844800000, 139.52],
    [1488931200000, 139.00],
    [1489017600000, 138.68],
    [1489104000000, 139.14],
    [1489363200000, 139.20],
    [1489449600000, 138.99],
    [1489536000000, 140.46],
    [1489622400000, 140.69],
    [1489708800000, 139.99],
    [1489968000000, 141.46],
    [1490054400000, 139.84],
    [1490140800000, 141.42],
    [1490227200000, 140.92],
    [1490313600000, 140.64],
    [1490572800000, 140.88],
    [1490659200000, 143.80],
    [1490745600000, 144.12],
    [1490832000000, 143.93],
    [1490918400000, 143.66],
    /* Apr 2017 */
    [1491177600000, 143.70],
    [1491264000000, 144.77],
    [1491350400000, 144.02],
    [1491436800000, 143.66],
    [1491523200000, 143.34],
    [1491782400000, 143.17],
    [1491868800000, 141.63],
    [1491955200000, 141.80],
    [1492041600000, 141.05],
    [1492387200000, 141.83],
    [1492473600000, 141.20],
    [1492560000000, 140.68],
    [1492646400000, 142.44],
    [1492732800000, 142.27],
    [1492992000000, 143.64],
    [1493078400000, 144.53],
    [1493164800000, 143.68],
    [1493251200000, 143.79],
    [1493337600000, 143.65],
    /* May 2017 */
    [1493596800000, 146.58],
    [1493683200000, 147.51],
    [1493769600000, 147.06],
    [1493856000000, 146.53],
    [1493942400000, 148.96],
    [1494201600000, 153.01],
    [1494288000000, 153.99],
    [1494374400000, 153.26],
    [1494460800000, 153.95],
    [1494547200000, 156.10],
    [1494806400000, 155.70],
    [1494892800000, 155.47],
    [1494979200000, 150.25],
    [1495065600000, 152.54],
    [1495152000000, 153.06],
    [1495411200000, 153.99],
    [1495497600000, 153.80],
    [1495584000000, 153.34],
    [1495670400000, 153.87],
    [1495756800000, 153.61],
    [1496102400000, 153.67],
    [1496188800000, 152.76],
    /* Jun 2017 */
    [1496275200000, 153.18],
    [1496361600000, 155.45],
    [1496620800000, 153.93],
    [1496707200000, 154.45],
    [1496793600000, 155.37],
    [1496880000000, 154.99],
    [1496966400000, 148.98],
    [1497225600000, 145.42],
    [1497312000000, 146.59],
    [1497398400000, 145.16],
    [1497484800000, 144.29],
    [1497571200000, 142.27],
    [1497830400000, 146.34],
    [1497916800000, 145.01],
    [1498003200000, 145.87],
    [1498089600000, 145.63],
    [1498176000000, 146.28],
    [1498435200000, 145.82],
    [1498521600000, 143.73],
    [1498608000000, 145.83],
    [1498694400000, 143.68],
    [1498780800000, 144.02],
    /* Jul 2017 */
    [1499040000000, 143.50],
    [1499212800000, 144.09],
    [1499299200000, 142.73],
    [1499385600000, 144.18],
    [1499644800000, 145.06],
    [1499731200000, 145.53],
    [1499817600000, 145.74],
    [1499904000000, 147.77],
    [1499990400000, 149.04],
    [1500249600000, 149.56],
    [1500336000000, 150.08],
    [1500422400000, 151.02],
    [1500508800000, 150.34],
    [1500595200000, 150.27],
    [1500854400000, 152.09],
    [1500940800000, 152.74],
    [1501027200000, 153.46],
    [1501113600000, 150.56],
    [1501200000000, 149.50],
    [1501459200000, 148.73],
    /* Aug 2017 */
    [1501545600000, 150.05],
    [1501632000000, 157.14],
    [1501718400000, 155.57],
    [1501804800000, 156.39],
    [1502064000000, 158.81],
    [1502150400000, 160.08],
    [1502236800000, 161.06],
    [1502323200000, 155.32],
    [1502409600000, 157.48],
    [1502668800000, 159.85],
    [1502755200000, 161.60],
    [1502841600000, 160.95],
    [1502928000000, 157.86],
    [1503014400000, 157.50],
    [1503273600000, 157.21],
    [1503360000000, 159.78],
    [1503446400000, 159.98],
    [1503532800000, 159.27],
    [1503619200000, 159.86],
    [1503878400000, 161.47],
    [1503964800000, 162.91],
    [1504051200000, 163.35],
    [1504137600000, 164.00],
    /* Sep 2017 */
    [1504224000000, 164.05],
    [1504569600000, 162.08],
    [1504656000000, 161.91],
    [1504742400000, 161.26],
    [1504828800000, 158.63],
    [1505088000000, 161.50],
    [1505174400000, 160.86],
    [1505260800000, 159.65],
    [1505347200000, 158.28],
    [1505433600000, 159.88],
    [1505692800000, 158.67],
    [1505779200000, 158.73],
    [1505865600000, 156.07],
    [1505952000000, 153.39],
    [1506038400000, 151.89],
    [1506297600000, 150.55],
    [1506384000000, 153.14],
    [1506470400000, 154.23],
    [1506556800000, 153.28],
    [1506643200000, 154.12],
    /* Oct 2017 */
    [1506902400000, 153.81],
    [1506988800000, 154.48],
    [1507075200000, 153.48],
    [1507161600000, 155.39],
    [1507248000000, 155.30],
    [1507507200000, 155.84],
    [1507593600000, 155.90],
    [1507680000000, 156.55],
    [1507766400000, 156.00],
    [1507852800000, 156.99],
    [1508112000000, 159.88],
    [1508198400000, 160.47],
    [1508284800000, 159.76],
    [1508371200000, 155.98],
    [1508457600000, 156.25],
    [1508716800000, 156.17],
    [1508803200000, 157.10],
    [1508889600000, 156.41],
    [1508976000000, 157.41],
    [1509062400000, 163.05],
    [1509321600000, 166.72],
    [1509408000000, 169.04],
    /* Nov 2017 */
    [1509494400000, 166.89],
    [1509580800000, 168.11],
    [1509667200000, 172.50],
    [1509926400000, 174.25],
    [1510012800000, 174.81],
    [1510099200000, 176.24],
    [1510185600000, 175.88],
    [1510272000000, 174.67],
    [1510531200000, 173.97],
    [1510617600000, 171.34],
    [1510704000000, 169.08],
    [1510790400000, 171.10],
    [1510876800000, 170.15],
    [1511136000000, 169.98],
    [1511222400000, 173.14],
    [1511308800000, 174.96],
    [1511481600000, 174.97],
    [1511740800000, 174.09],
    [1511827200000, 173.07],
    [1511913600000, 169.48],
    [1512000000000, 171.85],
    /* Dec 2017 */
    [1512086400000, 171.05],
    [1512345600000, 169.80],
    [1512432000000, 169.64],
    [1512518400000, 169.01],
    [1512604800000, 169.32],
    [1512691200000, 169.37],
    [1512950400000, 172.67],
    [1513036800000, 171.70],
    [1513123200000, 172.27],
    [1513209600000, 172.22],
    [1513296000000, 173.97],
    [1513555200000, 176.42],
    [1513641600000, 174.54],
    [1513728000000, 174.35],
    [1513814400000, 175.01],
    [1513900800000, 175.01],
    [1514246400000, 170.57],
    [1514332800000, 170.60],
    [1514419200000, 171.08],
    [1514505600000, 169.23],
    /* Jan 2018 */
    [1514851200000, 172.26],
    [1514937600000, 172.23],
    [1515024000000, 173.03],
    [1515110400000, 175.00],
    [1515369600000, 174.35],
    [1515456000000, 174.33],
    [1515542400000, 174.29],
    [1515628800000, 175.28],
    [1515715200000, 177.09],
    [1516060800000, 176.19],
    [1516147200000, 179.10],
    [1516233600000, 179.26],
    [1516320000000, 178.46],
    [1516579200000, 177.00]
  ];

  constructor() {
    this.options = {
      navigator: {
        enabled: false
        /*
        adaptToUpdatedData: false,
        series: {
          data: this.data
        }
        */
      },

      scrollbar: {
        liveRedraw: false
      },

      rangeSelector: {
        buttons: [{
          type: 'day',
          count: 1,
          text: '1D'
        }, {
          type: 'week',
          count: 1,
          text: '1W'
        }, {
          type: 'month',
          count: 1,
          text: '1M'
        }, {
          type: 'year',
          count: 1,
          text: '1Y'
        }],
        inputEnabled: false, // it supports only days
        selected: 0 // day
      },

      xAxis: {
        minRange: 3600 * 1000 * 24 // one day
      },

      yAxis: {
        floor: 0
      },

      credits: {
        enabled: false
      },

      series: [{
        name: 'AAPL',
        data: this.data,
        tooltip: {
          valueDecimals: 2
        }
      }]
    };
  }

  onAfterSetExtremesX(e) {
    const min = e.context.min;
    const max = e.context.max;
    console.log ('range:', min + ' ' + max);
    const chart = e.context.chart;
    chart.showLoading('Loading data from server...');
    setTimeout(() => {
      chart.series[0].setData(this.data);
      chart.hideLoading();
    }, 1000);
  }

}