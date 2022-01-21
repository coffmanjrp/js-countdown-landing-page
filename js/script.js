const day01 = document.getElementById('day01');
const day02 = document.getElementById('day02');
const hour01 = document.getElementById('hour01');
const hour02 = document.getElementById('hour02');
const minute01 = document.getElementById('minute01');
const minute02 = document.getElementById('minute02');
const second01 = document.getElementById('second01');
const second02 = document.getElementById('second02');
const targetDate = document.getElementById('target-date');
const dayOfTheWeek = document.getElementById('day-of-the-week');

const getTargetDate = () => {
  const getCurrentYear = new Date().getFullYear();
  const getCurrentMonth = new Date().getMonth();
  let targetMonth;

  if (getCurrentMonth < 10) {
    targetMonth = `0${getCurrentMonth + 2}`;
  } else if (getCurrentMonth === 11) {
    targetMonth = '01';
  } else {
    targetMonth = getCurrentMonth + 2;
  }

  const targetDay = `${getCurrentYear}/${targetMonth}/01`;
  const getDayOfTheWeek = new Date(targetDay).getDay();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  targetDate.innerHTML = targetDay;
  dayOfTheWeek.innerHTML = days[getDayOfTheWeek];
};

getTargetDate();
