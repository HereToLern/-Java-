const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLight1El = document.querySelector('#trafficLight2');
const trafficLight2El = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLight2El.style.background = ('black');
    trafficLight2El.removeEventListener('click', makeRed);
    trafficLight2El.addEventListener('click', makeGreen);
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}
function makeYellow() {
    trafficLightEl.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLight1El.style.background = ('yellow');
    trafficLight1El.removeEventListener('click', makeYellow);
    trafficLight1El.addEventListener('click', makeRed);
}
function makeRed() {
    trafficLight1El.style.background = ('black');
    trafficLight1El.removeEventListener('click', makeYellow);
    trafficLight1El.addEventListener('click', makeRed);
    trafficLight2El.style.background = ('red');
    trafficLight2El.removeEventListener('click', makeRed);
    trafficLight2El.addEventListener('click', makeGreen);
}
trafficLightEl.addEventListener('click', makeGreen);