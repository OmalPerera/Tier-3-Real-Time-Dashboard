$(function () {
  var socket = io();

  Highcharts.setOptions({
    global: {
      useUTC: false,
    },
  });

  var ranges = [
          [1246406400000, 0, 0],
          [1246492800000, 0, 0],
          [1246579200000, 0, 0],
          [1246665600000, 0, 0],
          [1246752000000, 0, 0],
          [1246838400000, 0, 0],
          [1246924800000, 0, 0],
          [1247011200000, 0, 0],
          [1247097600000, 0, 0],
          [1247184000000, 0, 0],
          [1247270400000, 0, 0],
          [1247356800000, 0, 0],
          [1247443200000, 0, 0],
          [1247529600000, 0, 0],
          [1247616000000, 0, 0],
          [1247702400000, 0, 0],
          [1247788800000, 0, 0],
          [1247875200000, 0, 0],
          [1247961600000, 0, 0],
          [1248048000000, 0, 0],
      ],
      averages = [
          [1246406400000, 0],
          [1246492800000, 0],
          [1246579200000, 0],
          [1246665600000, 0],
          [1246752000000, 0],
          [1246838400000, 0],
          [1246924800000, 0],
          [1247011200000, 0],
          [1247097600000, 0],
          [1247184000000, 0],
          [1247270400000, 0],
          [1247356800000, 0],
          [1247443200000, 0],
          [1247529600000, 0],
          [1247616000000, 0],
          [1247702400000, 0],
          [1247788800000, 0],
          [1247875200000, 0],
          [1247961600000, 0],
          [1248048000000, 0],
      ];


  var chartVSRPJ = new Highcharts.stockChart('vehicularSpeedRtParlimentJunction', {
      chart: {
        events: {
          load: function () {

            // set up the updating of the chart each second
            var x = (new Date()).getTime(); // current time

            var series = this.series[0];
            setInterval(function () {
              var y0 = 20;
              //y = Math.round(Math.random() * 100);
              series.addPoint([x, y0], true, true);
            }, 1000);

            series = this.series[1];
            setInterval(function () {
              //y1 = 14.3, 27.7;
              //y = Math.round(Math.random() * 100);
              series.addPoint([x, 14.3, 27.7], true, true);
            }, 1000);

          },
        },
      },

      title: {
          text: 'Parliment Junction to Rajagriya Vehicular Speeds',
        },

      subtitle: {
        //text: 'Built chart in ...', // dummy text to reserve space for dynamic subtitle
      },

      exporting: {
        enabled: false,
      },

      navigator: {
          series: {
              name: ' ',
            },
        },

      rangeSelector: {
        buttons: [{
          count: 2,
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

      xAxis: {
          type: 'datetime',
        },

      yAxis: {
          title: {
              text: 'Speed (km/h)',
            },
        },

      tooltip: {
          crosshairs: true,
          shared: true,
          valueSuffix: 'km/h',
        },

      legend: {},

      series: [{
          name: ' ',
          data: (function () {
            // generate an array of random data
            var data = [],
            time = (new Date()).getTime(),
            i;

            for (i = -999; i <= 0; i += 1) {
              data.push([
                time + i * 1000,
                10,
              ]);
            }

            return data;
          }()),

          zIndex: 1,
          marker: {
              fillColor: 'white',
              lineWidth: 2,
              lineColor: Highcharts.getOptions().colors[0],
            },
        }, {
          name: 'min-max',
          data: (function () {
            // generate an array of random data
            var data = [],
            time = (new Date()).getTime(),
            i;

            for (i = -699; i <= 0; i += 1) {
              data.push([
                time + i * 1000,
                10,
                10,
              ]);
            }

            return data;
          }()),

          type: 'arearange',
          lineWidth: 0,
          linkedTo: ':previous',
          color: Highcharts.getOptions().colors[1],
          fillOpacity: 0.4,
          zIndex: 0,
          marker: {
              enabled: false,
            },
        },
      ],
    });

  socket.on('SocketVehicularSpeedRtParlimentJunction', function (data) {
    if (typeof (data) !== 'object') {
      data = JSON.parse(data);
    }

    chartVSRPJ.series[0].addPoint([(new Date()).getTime(), data.avgKmh], true, true);
    chartVSRPJ.series[1].addPoint([(new Date()).getTime(), data.minKmh, data.maxKmh], true, true);

  });
});
