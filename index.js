function updateDayOfTheWeek() {
  const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getUTCDay()];
  dayElement.textContent = dayOfWeek;
}

function updateUTCTime() {
  const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
  const now = new Date().getTime();

  timeElement.textContent =now;
}

updateDayOfTheWeek();
updateUTCTime();

setInterval(updateUTCTime, 1000);