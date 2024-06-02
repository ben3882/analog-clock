let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');
let timeDisplay = document.querySelector('.time');




setInterval(()=>{
    let s;
    let m;
    let h;
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

