"use strict";
/*global $ */
//Movement animation
var Aantalmonsters = [], LevenMonsters = [];
function monstermove() {
    var platform = $('#gamePlatform').position(), platformLeft = platform.left, platformRight = platformLeft + $('#gamePlatform').width(), platformAbove = platform.top, platformUnder = platformAbove + $('#gamePlatform').height(), i, j, richting, aantalstappen;
    
    for (i = 0; i < Aantalmonsters.length; i = i + 1) { if (Aantalmonsters[i] === true) {
        richting = Math.floor(Math.random() * 4) + 1;
        aantalstappen = Math.floor(Math.random() * 3) + 1;
    }
                                                       switch (richting) { case 1:
                    
                    for (j = 0; j < aantalstappen; j = j + 1) { if ((($("#monster" + i).position().left) - 20 * aantalstappen) < 0) {} else { $("#monster" + i).animate({left: '-=20px'}, 500); } }
            break;
                    
            case 2:
                    
                    for (j = 0; j < aantalstappen; j = j + 1) {
                        if ((($("#monster" + i).position().top) - 20 * aantalstappen) < platformAbove) {} else { $("#monster" + i).animate({top: '-=20px'}, 500);
                        } }
            break;
            
            case 3:                    for (j = 0; j < aantalstappen; j = j + 1) { if ((($("#monster" + i).position().left) + 20 * aantalstappen) > platformRight) {
                        } else { $("#monster" + i).animate({left: '+=20px'}, 500);
                        }
                    }
            break;
            case 4:
                    for (j = 0; j < aantalstappen; j = j + 1) { if ((($("#monster" + i).position().top + $("#monster" + i).height() + 7) + 20 * aantalstappen) > platformUnder) {
                        } else { $("#monster" + i).animate({top: '+=20px'}, 500);
                        }
                    }
            break; 
            } 
        }
    
}
$(document).ready(function () {
    var monsters = $('.monsters').length;
    for (i = 0; i < monsters; i = i + 1) {
        Aantalmonsters.push(true);
        LevenMonsters.push(60);
    }
    monstermove();
});