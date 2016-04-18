"use strict";
/*global $ */
var Audio;
var IntroSound = new Audio("sounds/sound-intro.wav");
function Intro() {
    IntroSound.play();
	IntroSound.volume = 1;
    IntroSound.loop = true;
}
function Stop_Intro() {
    IntroSound.pause();
}
var pressStart = new Audio('sounds/13-level-clear.mp3');
function Press_Start() {
	pressStart.volume = 1;
	pressStart.play();
}
