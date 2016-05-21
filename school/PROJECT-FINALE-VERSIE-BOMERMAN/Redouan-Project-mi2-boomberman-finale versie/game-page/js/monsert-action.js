"use strict";
/*global $ */
var monsterMoveUp = true, monsterMoveLeft = true, monsterMoveRight = true, monsterMoveDown = true;

var KanBewegen = new Array(), functie_Array_teller = 0;

$(document).ready(function () {
    
});

function monsterintel() {
    scherm = $('#gamePlatform').position();
	schermLinks = scherm.left;
	schermRechts = schermLinks + $('#gamePlatform').width();
	schermTop = scherm.top;
	schermOnder = schermTop + $('#gamePlatform').height();
    var i, j, richting, aantalstappen;
    for (i = 0; i < Aantalmonsters.length; i = i + 1) { if (Aantalmonsters[i] === true) {
        richting = Math.floor(Math.random() * 4) + 1; aantalstappen = Math.floor(Math.random() * 3) + 1;
        switch (richting) {
        case 1:
            for (j = 0; j < aantalstappen; j = j + 1) {
                if ((($("#monster" + i).position().left) - 20 * aantalstappen) < 0) { } else { $("#monster" + i).animate({left: '-=20px'}, 500); }
            } break;
		case 2:
            for (j = 0; j < aantalstappen; j = j + 1) {
                if ((($("#monster" + i).position().top) - 20 * aantalstappen) < schermTop) { } else { $("#monster" + i).animate({top: '-=20px'}, 500); } }
		break;
		
		case 3://Rechts
                    for (j = 0; j < aantalstappen;j = j + 1) {
                    if ((($("#monster" + i).position().left) + 20 * aantalstappen) > schermRechts) {
                        } else { $("#monster" + i).animate({left: '+=20px'}, 500);
                        } } break;

		case 4:
                for (j = 0; j < aantalstappen; j = j + 1) {
                    if ((($("#monster" + i).position().top + $("#monster" + i).height() + 7) + 20 * aantalstappen) > schermOnder) { } else {
                          $("#monster" + i).animate({top: '+=20px'}, 500); } }
		break; } }} setTimeout ( function () { monsterintel();} , 1500);