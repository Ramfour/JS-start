const trafficContainer = document.querySelector('.trafficContainer');
const trafficLGreen = document.querySelector('#trafficLGreen');
const trafficLYellow = document.querySelector('#trafficLYellow');
const trafficLRed = document.querySelector('#trafficLRed');

function makeGreen() {
    trafficLGreen.style.background = ('green');
    trafficLRed.style.background = ('black');
    trafficContainer.removeEventListener('click', makeGreen);
    trafficContainer.addEventListener('click', makeYellow);
}
function makeYellow() {
    trafficLGreen.style.background = ('black');
    trafficLYellow.style.background = ('yellow');
    trafficContainer.removeEventListener('click', makeYellow);
    trafficContainer.addEventListener('click', makeRed);
}
function makeRed() {
    trafficLYellow.style.background = ('black');
    trafficLRed.style.background = ('red');
    trafficContainer.removeEventListener('click', makeRed);
    trafficContainer.addEventListener('click', makeGreen);
}


trafficContainer.addEventListener('click', makeGreen);