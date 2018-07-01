var socket = io();
var temperatureValue = 1;

$(function () {
      $('#gasCompositionRtCmb').highcharts('StockChart', {

        chart: {
            type: 'area',
          },

        plotOptions: {
            series: {
                stacking: 'percent',
              },
          },

        rangeSelector: {
            selected: 1,
          },

        yAxis: {
          title: {
            text: 'Percentage of gases',
          },
        },

        title: {
          text: 'Real-Time Air Composition in Colombo, Sri Lanka.',
        },

        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
          split: true,
        },

        navigator: {
            series: {
                name: ' ',
              },
          },

        subtitle: {
          //text: 'Built chart in ...', // dummy text to reserve space for dynamic subtitle
        },

        exporting: {
          enabled: false,
        },

        series: [{
            name: 'Nitrogen',
            data: ADBE,
          },
          {
            name: 'Oxygen',
            data: MSFT,
          },
        ],
      }, function (chart) {
          $('button').on('click', function () {
            for (var index in chart.series) {
              chart.series[index].update({
                    stacking: 'normal',
                  });
            }
          });
        });
    });
