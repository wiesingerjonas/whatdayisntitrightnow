addEventListener('load', () => {
    showDay();
});

function showDay() {

    const day = getDay();

    let dayElement = document.getElementById('day');

    dayElement.innerText = day;
    document.title = day;

}

function getDay() {

    let random = Math.floor(Math.random() * (6) ) + 1;
    let posneg = Math.round(Math.random());

    if(posneg === 0) {
        random = -random;
    }

    let today = new Date();
    const day = new Date(today);
    day.setDate(today.getDate() + random);

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    return new Intl.DateTimeFormat('en-GB', options).format(day);
}