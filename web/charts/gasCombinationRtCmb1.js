var socket = io();
var temperatureValue = 1;

$(function () {

  Highcharts.chart('gasCombinationRtCmb', {
      chart: {
          type: 'area',
          /*events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        },*/
      },
      title: {
          text: 'Real-Time air composition in Colombo, Sri Lanka, 2018',
      },
      subtitle: {
          //text: 'Source: Wikipedia.org',
      },
      xAxis: {
          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false,
          },
      },
      yAxis: {
          title: {
              text: 'Percent',
          }
      },
      tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
          split: true
      },
      plotOptions: {
          area: {
              stacking: 'percent',
              lineColor: '#ffffff',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#ffffff'
              }
          }
      },
      series: [{
          name: 'Asia',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Africa',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Europe',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'America',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Oceania',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  });

});













/*
  Highcharts.setOptions({
    global: {
      useUTC: false,
    },
  });

  // Create the chart
  chartRtColombo = new Highcharts.stockChart('gasCombinationRtCmb', {
    chart: {
      events: {
        load: function () {

          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = (new Date()).getTime(), // current time
            y = Math.round(Math.random() * 100);
            //y = temperatureValue;
            series.addPoint([x, y], true, true);
          }, 1000);
        },
      },
    },

    rangeSelector: {
      buttons: [{
        count: 1,
        type: 'minute',
        text: '1M',
      }, {
        count: 5,
        type: 'minute',
        text: '5M',
      }, {
        type: 'all',
        text: 'All',
      },
      ],
      inputEnabled: false,
      selected: 0,
    },

    yAxis: {
      title: {
        text: 'Temperature (°C)',
      },
    },

    title: {
      text: 'Real-Time temperatures in Colombo, Sri Lanka, 2018',
    },

    subtitle: {
      text: 'Built chart in ...', // dummy text to reserve space for dynamic subtitle
    },

    exporting: {
      enabled: false,
    },

    series: [{
      name: 'Temperature',
      data: (function () {
        // generate an array of random data
        var data = [],
        time = (new Date()).getTime(),
        i;

        for (i = -999; i <= 0; i += 1) {
          data.push([
            time + i * 1000,

            //temperatureValue,
            //Math.round(Math.random() * 100)
          ]);
        }

        return data;
      }()),

      //pointStart: 1451606400000,  //unix time of stating data | can be accessed <data.pointStart> | convert using https://www.epochconverter.com/
      //pointInterval: 86400000,//time interval in miliseconds | can be accessed <data.pointInterval> | use https://www.calculateme.com/Time/Hours/ToMilliseconds.htm
      tooltip: {
        valueDecimals: 1,
        valueSuffix: '°C',
      },
    },
    ],
  });

});

socket.on('aggregator-message', function (data) {
  if (typeof (data) !== 'object') {
    data = JSON.parse(data);
  }

  //console.log('\n');
  console.log(data);
  temperatureValue = data.temperature;
});
*/
