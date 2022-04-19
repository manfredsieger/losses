import losses from './losses';
import { getWordWithBigFirstLetter } from './helpers';
import translation from './translation';

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

// Colors for the lines on the chart
const colors = ['#f1c40f', '#27ae60', '#ecf0f1', '#9b59b6', '#e74c3c', '#1abc9c', '#f39c12', '#7f8c8d', '#2c3e50', '#2980b9', '#bdc3c7'];

/**
 * Creates an array of lables - dates to be rendered in the bottom of the chart.
 * @returns an array of dates in form of '24.02'. If the month consists of only one number
 * like January - 1, a leading zero will be added automatically so we get 01 instead of 1.
 */
export function getLabels() {
  return Object.keys(losses).map((date) => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    if (month.toString().length === 1) {
      return `${dateObj.getDate()}.0${month}`;
    }
    return `${dateObj.getDate()}.${month}`;
  });
}

function getData(item) {
  return Object.keys(losses).map((date) => losses[date][item]);
}

export function getDatasets(lossesTypes, websiteLanguage) {
  return lossesTypes.map((item, index) => ({
    label: getWordWithBigFirstLetter(translation[websiteLanguage].main.losses[item]),
    data: getData(item),
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: colors[index],
    tension: 0.2,
    fill: false,
  }));
}
