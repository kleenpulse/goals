
const welcome_div = document.querySelector(".welcome");
(function hideWelcome() {
    const isWelcomed = localStorage.getItem('welcome');
    if (isWelcomed === "true") {
        welcome_div.style.display = "none";
        return
    }
})()
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


window.addEventListener("load", function () {
    welcome_div.classList.add("hide-welcome");
    this.localStorage.setItem("welcome", "true");
});


console.log(dataDay)
function updateUTCTime() {
    const time = new Date()
    let currentUTCTime = time.toUTCString();
    dataTime.textContent = currentUTCTime
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






