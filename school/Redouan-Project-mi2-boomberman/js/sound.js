"use strict";
/*global $ */
var Audio;
var IntroSound = new Audio("sounds/sound-intro.wav");
var LevelSound = new Audio("../sounds/level-sound.mp3");
var TimeUp = new Audio("../sounds/bomber-time-up.mp3");
function Intro() {
    IntroSound.play();
	IntroSound.volume = 1;
    IntroSound.loop = true;
}
function TimerUp() {
    TimeUp.play();
	TimeUp.volume = 1;
}
function Stop_game() {
    LevelSound.pause();
}
function Stop_timer() {
    TimeUp.pause();
}
function Level() {
    LevelSound.play();
    LevelSound.volume = 1;
    LevelSound.loop = true;
}
function Stop_Intro() {
    IntroSound.pause();
}
function Stop_time() { TimerUp.pause(); }
var pressStart = new Audio('sounds/13-level-clear.mp3');
function Press_Start() {
	pressStart.volume = 1;
	pressStart.play();
}
$(document).ready(function () {
    $("#sound").click(function () {
        var image = document.getElementById("sound");
        if (image.src.match("sound")) {
            image.src = "img/mute.png";
            LevelSound.pause();
        } else if (image.src.match("mute")) {
            image.src = "img/sound.png";
            LevelSound.play();
        }
    });
});