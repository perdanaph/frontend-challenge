const dataObj = [
  {
    day: 'mon',
    amount: 20.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

for (let index = 0; index < dataObj.length; index++) {
  document.getElementById('mon').innerText = dataObj[0].day;

  document.getElementById('tue').innerText = dataObj[1].day;

  document.getElementById('wed').innerText = dataObj[2].day;

  document.getElementById('thu').innerText = dataObj[3].day;

  document.getElementById('fri').innerText = dataObj[4].day;

  document.getElementById('sat').innerText = dataObj[5].day;

  document.getElementById('sun').innerText = dataObj[6].day;
}
