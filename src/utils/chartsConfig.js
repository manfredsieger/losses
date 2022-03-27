export const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: 'Russia`s losses in Ukraine',
    },
    legend: {
      labels: {
        color: 'rgba(0,0,0,0.6)',
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(0,0,0,0.6)',
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(0,0,0,0.6)',
      },
    },
  },
};

export const colors = ['#f1c40f', '#27ae60', '#ecf0f1', '#9b59b6', '#e74c3c', '#1abc9c', '#f39c12', '#7f8c8d', '#2c3e50', '#2980b9', '#bdc3c7'];
