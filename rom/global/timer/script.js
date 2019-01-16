updateTimer();

function updateTimer() {
    var time = new Date();
        days = 6 - time.getUTCDay() + 1,
        hours = 23 - time.getUTCHours() + 11,
        minutes = 59 - time.getUTCMinutes(),
        seconds = 59 - time.getUTCSeconds();

        if(hours > 24){
            hours -= 24;
            days++;
        };

document.getElementById('countdown-timer-days-w').innerHTML  = ("0" + days).slice(-2);
document.getElementById('countdown-timer-hours-w').innerHTML  = ("0" + hours).slice(-2);
document.getElementById('countdown-timer-minutes-w').innerHTML  = ("0" + minutes).slice(-2);
document.getElementById('countdown-timer-seconds-w').innerHTML  = ("0" + seconds).slice(-2);

document.getElementById('countdown-timer-hours').innerHTML  = ("0" + hours).slice(-2);
document.getElementById('countdown-timer-minutes').innerHTML  = ("0" + minutes).slice(-2);
document.getElementById('countdown-timer-seconds').innerHTML  = ("0" + seconds).slice(-2);

}; setInterval('updateTimer()', 1000 ) // auto update time every 1 sec