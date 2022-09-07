const ctx = document.getElementById('myChart').getContext('2d');
const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Dataset',
        data: {count: 6, min: -100, max: 100},
        borderColor: 'red',
        fill: false,
        stepped: true,
      }
    ]
  };

  
const myChart = new Chart(ctx, {
    
    type: 'line',
    data: data,
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        axis: 'x'
      },
      plugins: {
        title: {
          display: true,
          text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
        }
      }
    }
});