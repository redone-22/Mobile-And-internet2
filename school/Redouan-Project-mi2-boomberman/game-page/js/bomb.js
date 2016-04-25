"use strict";
/*global $ */
var space = 32;
var playerPosition, playerPositions;
var numberBom = 1;
var bomInGame = 1;
var bomexplosion = 1;
var bomhist = 1;
var timer = false;
    
$(document).keydown(function (b) {
    if ((b.which) === space) {
        if (bomInGame <= numberBom) {playerPosition = $('#bomber').position(); playerPositions = {top: playerPosition.top, left: playerPosition.left}; $("#gamePlatform").append("<img src='img/Smoothie_Smash_Bomb.gif' alt='bomb' id='bomb" + bomhist + "'>");
                            $("#bomb" + bomhist).css({position: 'absolute', top: playerPositions.top + 5, left: playerPositions.left + 15, height: '50px', width: '50px'}); bomInGame = bomInGame + 1; bomhist = bomhist + 1;   
                                     setTimeout(function b1() { $("#bomb" + bomexplosion).attr('src', 'img/bom.png'); $("#bomb" + bomhist).css({height: '100px', width: '100px'}); bomexplosion = bomexplosion + 1; bomInGame = bomInGame - 1; setTimeout(function () {$("#bomb" + bomhist).remove(); }, 5500); setTimeout(function () {$("#bomb" + bomexplosion).remove(); }, 8000); }, 5000);
                                     
                           }
        /*
        if (bomInGame === 2 && bomInGame < numberBom) {numberBom = numberBom - 1; playerPosition = $('#bomber').position(); playerPositions = {top: playerPosition.top, left: playerPosition.left}; $("#gamePlatform").append("<img src='img/Smoothie_Smash_Bomb.gif' alt='bomb' id='bomb" + bomInGame + "'>");
                            $("#bomb" + bomInGame).css({position: 'absolute', top: playerPositions.top, left: playerPositions.left, height: '50px', width: '50px'});  setTimeout(function b2() { $("#bomb" + bomexplosion).attr('src', 'img/bom.png'); bomexplosion = bomexplosion + 1; }, 1000); bomInGame = bomInGame + 1;
                           }*/
    }
    /*if (timer === true) { setTimeout(function () { $("#bomb" + bomInGame).attr('src', 'img/bom.png'); }, 1000); timer = false; }*/
});

/*$("#bomb" + bomInGame).css({height: '100px', width: '100px'}); */