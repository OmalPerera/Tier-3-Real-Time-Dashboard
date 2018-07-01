var socket = io();
var temperatureValue = 1;

$(function () {
  Highcharts.setOptions({
    global: {
      useUTC: false,
    },
  });

  // Create the chart
  Highcharts.stockChart('temperatureRtCmb', {
    chart: {
      events: {
        load: function () {

          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = (new Date()).getTime(), // current time
            //y = 20;
            //y = Math.round(Math.random() * 100);
            y = temperatureValue;
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
      text: 'Real-Time temperature in Colombo, Sri Lanka.',
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
