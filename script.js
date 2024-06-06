let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');
let timeDisplay = document.querySelector('.time');
let container = document.querySelector('.container');
let dot = document.querySelector('.dot');
let root = document.documentElement;
let clockDiameter = 50;
 let dots = [];
 let tickMark = [];

root.style.setProperty('--clock-width', `${clockDiameter}vw`);
 
function makeDots () {
    for( let i = 0; i < 4; i++) {
        dots[i] = document.createElement('div');
        dots[i].setAttribute('class', `dot`);
        container.appendChild(dots[i]);
    }
}

function placeDots(){
  let angle = 90;
  let radians = (angle * Math.PI) / 180;
    for( let i = 0; i < 4; i++) {
        dots[i].style.position = 'absolute';
        dots[i].style.backgroundColor = 'blue';
        dots[i].style.top = `${clockDiameter * ( 1 - Math.cos(radians*i))/2}vw`;
        dots[i].style.left = `${clockDiameter * ( 1 + Math.sin(radians*i))/2}vw`;
        dots[i].style.transform = `translate(${(1 + Math.sin(radians * (i)))*-100/2}%, ${(1 - Math.cos(radians * (i)))*-100/2}%)`;
    }
}

function tickMarks () {
    for(let i = 0; i < 60; i++) {
        if (i % 5 != 0) {
            tickMark[i] = document.createElement('div');
            tickMark[i].setAttribute('class', 'tick-mark');
            tickMark[i].style.width = `${clockDiameter/120}vw`;
            tickMark[i].style.height = `${clockDiameter/60}vw`;
            tickMark[i].style.backgroundColor = 'purple'
            container.appendChild(tickMark[i]);
        }
    }
    console.log(tickMark);
}

function placeTickMarks () {
    let angle = 6;
    let radians = (angle * Math.PI) / 180;
    for(let i = 0; i < 60; i++) {
        if (i % 5 != 0) {
            tickMark[i].style.position = 'absolute';
            tickMark[i].style.top = `${clockDiameter * ( 1 - Math.cos(radians*i))/2}vw`;
            tickMark[i].style.left = `${clockDiameter * ( 1 + Math.sin(radians*i))/2}vw`;
            tickMark[i].style.transform = `translate(-50%) rotate(${angle * i}deg)`;
            tickMark[i].style.transformOrigin = 'center top';
        }
    }
}
// makeDots();
// placeDots();
tickMarks();
placeTickMarks();


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




