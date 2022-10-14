import { getWordWithBigFirstLetter } from './helpers';
import translation from './translation';

/**
 * Config for the chart
 */
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
        font: {
          size: 14,
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(0,0,0,0.6)',
        font: {
          size: 14,
        },
      },
    },
  },
  elements: {
    point: {
      radius: 0, // Remove circles from the lines because it's a 0
    },
  },
};

/**
 * Colors for the lines on the chart
 */
const colors = ['#f1c40f', '#27ae60', '#ecf0f1', '#9b59b6', '#e74c3c', '#1abc9c', '#f39c12', '#7f8c8d', '#2c3e50',
  '#2980b9', '#bdc3c7'];

/**
 * The modes for the chart to show items.
 * If 'showOne' is selected, the chart can show
 * only one line at a time. If 'multiple' is
 * selected, multiple lines can be rendered
 * on the chart at once.
 * @type {{showOne: string, multiple: string}}
 */
export const chartModes = {
  multiple: 'multiple',
  showOne: 'showOne',
};

/**
 * Creates an array of labels - dates to be rendered on the horizontal bottom line of the chart.
 * @returns an array of dates in form of '24.02'. If the month/day consists of only one number
 * like January - 1, a leading zero will be added automatically, so we get 01 instead of 1.
 */
export function getLabels(losses) {
  return losses
    .map((item) => {
      const dateObj = new Date(item.date);
      const month = (dateObj.getMonth().toString().length === 1 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1);
      const date = dateObj.getDate().toString().length === 1 ? `0${dateObj.getDate()}` : dateObj.getDate();
      return `${date}.${month}`;
    })
    .reverse();
}

/**
 * Creates an array of all data for a particular item (aircrafts, artillery etc.).
 * @param item is the name of an item.
 * @param losses is the array of all losses.
 * @returns {*[]|*} an array of all data for a particular item or an empty array
 * if the losses-array was not fetched yet.
 */
function getData(item, losses) {
  if (losses.length > 0) {
    return losses
      .map((obj) => obj[item])
      .reverse();
  }
  return [];
}

// TODO add comment
export function getDatasets(lossesTypes, websiteLanguage, losses) {
  return lossesTypes.map((item, index) => ({
    label: getWordWithBigFirstLetter(translation[websiteLanguage].main.losses[item].name),
    data: getData(item, losses),
    borderColor: colors[index], // line color
    borderWidth: 4, // line width
    backgroundColor: colors[index], // circles on the line color. Currently, not applied cause ticks are removed
    tension: 0.2,
    fill: false,
  }));
}
