const day01 = document.getElementById('day01');
const day02 = document.getElementById('day02');
const hour01 = document.getElementById('hour01');
const hour02 = document.getElementById('hour02');
const minute01 = document.getElementById('minute01');
const minute02 = document.getElementById('minute02');
const second01 = document.getElementById('second01');
const second02 = document.getElementById('second02');
const targetDay = document.getElementById('target-day');
const dayOfTheWeek = document.getElementById('day-of-the-week');

const getTargetDate = () => {
  const date = new Date();
  const getCurrentYear = date.getFullYear();
  const getCurrentMonth = date.getMonth();
  let targetMonth;

  if (getCurrentMonth < 10) {
    targetMonth = `0${getCurrentMonth + 2}`;
  } else if (getCurrentMonth === 11) {
    targetMonth = '01';
  } else {
    targetMonth = getCurrentMonth + 2;
  }

  const targetDate = `${getCurrentYear}/${targetMonth}/01`;
  const getDayOfTheWeek = new Date(targetDate).getDay();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  targetDay.innerHTML = targetDate;
  dayOfTheWeek.innerHTML = days[getDayOfTheWeek];

  return new Date(targetDate);
};

const getTimeElement = (el1, el2, time) => {
  el1.innerHTML = !time.toString().split('')[1]
    ? '0'
    : time.toString().split('')[0];

  el2.innerHTML = !time.toString().split('')[1]
    ? time.toString().split('')[0]
    : time.toString().split('')[1];
};

const setCountdown = () => {
  const date = new Date();
  const targetDate = getTargetDate();
  const diff = targetDate - date;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  getTimeElement(day01, day02, days);
  getTimeElement(hour01, hour02, hours);
  getTimeElement(minute01, minute02, minutes);
  getTimeElement(second01, second02, seconds);
};

getTargetDate();
setInterval(setCountdown, 1000);
