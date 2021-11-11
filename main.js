//global variables

const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

//Events listeners
start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)

//Timer Function
function timer (){
    seconds++;

    //formating the time
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let sec = seconds % 60;

    if (hours < 10) {hours = '0' + hours;}
    if (mins < 10) {mins = '0' + mins;}
    if (sec < 10) {sec = '0' + sec;}

    time_el.innerText = `${hours}:${mins}:${sec}`;
}

function start() {
    if (interval){
        return;
    }

    interval = setInterval(timer, 1000);
}

function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop ();
    seconds = 0;
    time_el.innerText = '00:00:00';

}