// Remember user's theme preference
// Doesn't affect anything else
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('[data-testid="dark-mode-checkbox"]');

    checkbox.checked = localStorage.getItem('darkMode') === 'true';

    checkbox.addEventListener('change', function (event) {
        localStorage.setItem('darkMode', event.currentTarget.checked);
    });

});
const dataDay = document.querySelector("[data-testid='currentDay']");
const dataTime = document.querySelector("[data-testid='currentTimeUTC']");

console.log(dataDay)
function updateUTCTime() {
    const time = new Date().getTime();
    dataTime.textContent = time
}
function updateUTCDay() {
    const options = {
        timeZone: 'UTC',
        weekday: 'long',
    };
    const day = new Date().toLocaleDateString('en-US', options);
    dataDay.textContent = day
}
// Update the time initially
updateUTCTime();
updateUTCDay();

// Update the time every second
setInterval(updateUTCTime, 100);






