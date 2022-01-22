const container = document.querySelector('.container');
const day01 = document.getElementById('day01');
const day02 = document.getElementById('day02');
const hour01 = document.getElementById('hour01');
const hour02 = document.getElementById('hour02');
const minute01 = document.getElementById('minute01');
const minute02 = document.getElementById('minute02');
const second01 = document.getElementById('second01');
const second02 = document.getElementById('second02');
const dateText = document.getElementById('date-text');
const targetDay = document.getElementById('target-day');
const dateContent = document.querySelectorAll('#date p span');
const dayOfTheWeek = document.getElementById('day-of-the-week');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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

  targetDay.innerHTML = targetDate;
  dayOfTheWeek.innerHTML = days[getDayOfTheWeek];

  // Set attributes for text reflect effect
  dateText.setAttribute('data-date', dateText.textContent);
  targetDay.setAttribute('data-date', targetDate);
  dayOfTheWeek.setAttribute('data-date', days[getDayOfTheWeek]);

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

const getRandomCounter = (el) => {
  const randomCounter = Math.floor(Math.random() * 10);
  el.innerHTML = randomCounter.toString();
};

const setRamdomCounter = () => {
  const elements = [
    day01,
    day02,
    hour01,
    hour02,
    minute01,
    minute02,
    second01,
    second02,
  ];

  elements.forEach((el) => getRandomCounter(el));
};

const initialLoading = () => {
  window.onload = container.classList.add('loaded');
};

const run = () => {
  initialLoading();
  getTargetDate();
  const randomCounter = setInterval(setRamdomCounter, 100);
  setTimeout(() => clearInterval(randomCounter), 2000);
  setInterval(setCountdown, 1000);
};

run();
