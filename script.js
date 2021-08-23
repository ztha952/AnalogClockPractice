let hourTag = document.getElementsByClassName('hour')[0];
let minuteTag = document.getElementsByClassName('minute')[0];
let secondTag = document.getElementsByClassName('second')[0];

let setClock = setInterval(() => {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    
    let hr_rotation = (30 * hr) + (min / 2);
    let min_rotation = (min * 6) + (sec / 10);
    let sec_rotation = sec * 6;


    hourTag.style.transform = `rotate(${hr_rotation}deg)`;
    minuteTag.style.transform = `rotate(${min_rotation}deg)`;
    secondTag.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);