let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');
let timeDisplay = document.querySelector('.time');
let container = document.querySelector('.container');
let dot = document.querySelector('.dot');
 let dots = [];

function makeDots () {
    for( let i = 0; i < 4; i++) {
        dots[i] = document.createElement('div');
        dots[i].setAttribute('class', `dot`);
        container.appendChild(dots[i]);
    }
}

function placeDots(){
  let angle = (90 * Math.PI) / 180;
    for( let i = 0; i < 4; i++) {
        dots[i].style.position = 'absolute';
        dots[i].style.backgroundColor = 'blue';
        dots[i].style.top = `${50 * ( 1 - Math.cos(angle*i))/2}vw`;
        dots[i].style.left = `${50 * ( 1 + Math.sin(angle*i))/2}vw`;
        dots[i].style.transform = `translate(${(1 + Math.sin(angle * (i)))*-100/2}%, ${(1 - Math.cos(angle * (i)))*-100/2}%)`;
        //`${(1 + Math.sin(angle * (i)))*-100/2}%`, `${1 + Math.cos(angle*(i))*-100/2}%`
    // top:calc(var(--clock-width)/2);
    // left: 0;
    }
}

makeDots();
placeDots();
console.log(dots);


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

