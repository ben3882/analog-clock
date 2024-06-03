let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');
let timeDisplay = document.querySelector('.time');
let container = document.querySelector('.container');
let dot = document.querySelector('.dot');

function makeDots () {
    let dots = [];
    for( let i = 0; i < 3; i++) {
        dots[i] = document.createElement('div');
        container.appendChild(dots[i]);
        dots[i].className = 'dot';
        dots[i].style.position = 'absolute';
        dots[i].style.backgroundColor = 'blue';
        dots[i].style.top = `${i*10}vw`;
        dots[i].style.left = `${i*10}vw`;
        
    }
}
makeDots();

setInterval(()=>{
    let s, m, h;
    let time = new Date;
    [s, m, h] = convert(time.getSeconds(), time.getMinutes(), time.getHours());
    secondHand.style.transform = `translateX(-50%) rotate(${s}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${m + s/60}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${h + m/60}deg)`;
    function convert(seconds, minutes, hours ){
        let angles = [];
        angles.push(seconds*6);
        angles.push(minutes*6);
        angles.push(hours*30);
        return angles;
    }
}, '1000');

// timeDisplay.textContent=minutes.toString();

// console.log(minutes);

