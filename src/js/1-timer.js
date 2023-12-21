import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const startBtn = document.querySelector("[data-start]");
const daysTimer = document.querySelector("[data-days]");
const hoursTimer = document.querySelector("[data-hours]");
const minutesTimer = document.querySelector("[data-minutes]");
const secondsTimer = document.querySelector("[data-seconds]");

let userSelectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (new Date() < selectedDates[0]) {
            userSelectedDate = selectedDates[0];
            console.log(userSelectedDate);
            startBtn.disabled = false;
        } else {
            makeDisableBtn();
            alert("Please choose a date in the future");
        }

    },
};
flatpickr("#datetime-picker", options);

startBtn.addEventListener('click', () => {
    makeDisableBtn();
    let userSelectedDateInMs = userSelectedDate.getTime();

    const intervalId = setInterval(() => {
        const differenceInTime = convertMs(userSelectedDateInMs - new Date());
        const { days, hours, minutes, seconds } = differenceInTime;

        daysTimer.innerHTML = days;
        hoursTimer.innerHTML = hours;
        minutesTimer.innerHTML = minutes;
        secondsTimer.innerHTML = seconds;


        userSelectedDateInMs = userSelectedDateInMs - 100;
        console.log(userSelectedDateInMs);
    }, 1000);

    setTimeout(() => clearInterval(intervalId), userSelectedDateInMs - new Date() - 100);

});


function makeDisableBtn() {
    startBtn.disabled = true;
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}