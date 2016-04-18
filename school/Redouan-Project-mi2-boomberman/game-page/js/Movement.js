"use strict";
/*global $ */
//Movement animation
var moveUp = true;
var moveLeft = true;
var moveRight = true;
var moveDown = true;

var moveUp2 = true;
var moveLeft2 = true;
var moveRight2 = true;
var moveDown2 = true;

var left = 37, up = 38, right = 39, down = 40;
var bewegingLinks = 0, bewegingOmhoog = 0, bewegingRechts = 0;
$(document).keydown(function (e) {
    switch (e.which) { case left:
            if (moveLeft && moveLeft2) {
            $("#bomber").attr('src', 'img/left.png');
                if (bewegingLinks === 0) { $("#bomber").attr('src', 'img/left-move2.png'); bewegingLinks = 1; } else if (bewegingLinks === 1) { $("#bomber").attr('src', 'img/left-move1.png'); bewegingLinks = 0; } $("#bomber").animate({ "left": "-=5px" }, 0); } break;
		case up://Omhoog
            if (moveUp && moveUp2) {
            $("#bomber").attr('src', 'img/top.png');
			/*bewegingLinks = bewegingLinks + 1;
			var linksVertragen = bewegingLinks / 2;*/
				if (bewegingOmhoog === 0) { $("#bomber").attr('src', 'img/top-move1.png'); bewegingOmhoog = 1; } else if (bewegingOmhoog === 1) { $("#bomber").attr('src', 'img/top-move2.png'); bewegingOmhoog = 0; } $("#bomber").animate({ "top": "-=5px" }, 0); }
		break;
		
		case right://Rechts
            if(moveRight && moveRight2){
		  $("#bomber").attr('src', 'img/right.png');
			/*bewegingLinks = bewegingLinks + 1;
			var linksVertragen = bewegingLinks / 2;*/
				if (bewegingRechts === 0) { $("#bomber").attr('src', 'img/right-move2.png'); bewegingRechts = 1; } else if (bewegingRechts === 1) { $("#bomber").attr('src', 'img/right-move1.png'); bewegingRechts = 0; } $("#bomber").animate({ "left": "+=5px" }, 0); }break;

		case down://Beneden
            if(moveDown && moveDown2){
            $("#bomber").attr('src', 'img/normal_bomber.png');
			/*bewegingLinks = bewegingLinks + 1;
			var linksVertragen = bewegingLinks / 2;*/
				if (bewegingOmhoog === 0) { $("#bomber").attr('src', 'img/normal-move1.png'); bewegingOmhoog = 1; } else if (bewegingOmhoog === 1) { $("#bomber").attr('src', 'img/normal-move2.png'); bewegingOmhoog = 0; } $("#bomber").animate({ "top": "+=5px" }, 0);}
		break; }
});
$(document).keyup(function (e) { switch (e.which) { case left:
             $("#bomber").attr('src', 'img/left.png');
             break;
            
		case up://Omhoog
               $("#bomber").attr('src', 'img/top.png');        
		break;
		case right://Rechts
             $("#bomber").attr('src', 'img/right.png');
		   break;

		case down://Beneden
             $("#bomber").attr('src', 'img/normal_bomber.png');
		break; }
    });

