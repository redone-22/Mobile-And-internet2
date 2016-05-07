"use strict";
/*global $ */
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if (timer === 10)
            {
                document.getElementById("timer").style.color = "#FF0000";
                document.getElementById("timer").style.borderColor = "#FF0000";

            }
        if ((timer = timer - 1) < 0) {
            timer = false;
            moveUp = false;
            moveLeft = false;
            moveRight = false;
            moveDown = false;
            moveUp2 = false;
            moveLeft2 = false;
            moveRight2 = false;
            moveDown2 = false;
        }
        if (timer === 0) {
            clearInterval(monsters);
            TimerUp();
            Stop_game();
            Stop_time();
        }
    }, 1000);
}
window.onload = function () {
    var fiveMinutes = 60 * 0.5,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};