window.addEventListener('load', () => {
  showDay();
});

function showDay() {
  const day = getDay();
  const dayElement = document.getElementById('day');

  dayElement.textContent = day;
  dayElement.title = day;
}

function getDay() {
  const posneg = Math.round(Math.random());
  let random = Math.floor(Math.random() * 6) + 1;

  if (posneg === 0) {
    random = -random;
  }

  const day = new Date();

  day.setDate(day.getDate() + random);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('en-GB', options).format(day);
}
