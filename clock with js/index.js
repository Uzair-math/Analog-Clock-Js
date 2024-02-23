let hr = document.getElementById('hour')
let mint = document.getElementById('mint')
let sec = document.getElementById('sec')

function displayTime(){
let date = new Date()
    //  getting hour, mins, sec, from date
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    let hRotation = 30*hh + mm/2
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform =  `rotate(${hRotation}deg)`;
    mint.style.transform =  `rotate(${mRotation}deg)`;
    sec.style.transform =  `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000)