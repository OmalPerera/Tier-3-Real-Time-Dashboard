
Highcharts.createElement('link', {
  href: 'https://fonts.googleapis.com/css?family=Dosis:400,600',
  rel: 'stylesheet',
  type: 'text/css',
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
  colors: [
    '#1571A7', //'#1C83C6', //'#7cb5ec',
    '#2AB8FD', //'#22C4C6', //'#f7a35c',
    '#5BCBFF', //'#1AB394', //'#90ee7e',
    '#A3E2FF', //'#D1D9DC', //'#7798BF',
    '#0C4F74', //'#F9AB58', //'#aaeeee',
    '#ff0066',
    '#eeaaee',
    '#55BF3B',
    '#DF5353',
    '#7798BF',
    '#aaeeee',
  ],
  chart: {
      backgroundColor: '#F0F3F4', //null,
      style: {
        fontFamily: 'Roboto, sans-serif', //Dosis
      },
    },
  title: {
      style: {
        color: '#363636',
        fontSize: '16px',
        fontWeight: 'regular',
        //textTransform: 'uppercase',
      },
    },
  tooltip: {
      borderWidth: 0,
      backgroundColor: '#F0F3F4', //'rgba(219,219,216,0.8)',
      shadow: false,
    },
  legend: {
      itemStyle: {
        fontWeight: 'bold',
        fontSize: '13px',
      },
    },
  xAxis: {
      gridLineWidth: 1,
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
  yAxis: {
      minorTickInterval: 'auto',
      title: {
        style: {
          textTransform: 'uppercase',
        },
      },
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
  plotOptions: {
      candlestick: {
        lineColor: '#3FC3FB', //'#1b84c5',
      },
    },

  // General
  background2: '#F0F0EA',

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
