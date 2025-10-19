const daysElement = document.getElementById('days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secoundElement = document.querySelector('#secounds');

const currentDate = new Date();
//console.log(currentDate.getTime()/1000);

const endDate = new Date(2026, 0, 1);
//console.log(endDate);

const totalSeconds = (endDate - currentDate) / 1000;
console.log(totalSeconds);

const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 3600) % 24;
const minutes = Math.floor(totalSeconds / 60) % 60;
const secounds = Math.floor(totalSeconds) % 60;
