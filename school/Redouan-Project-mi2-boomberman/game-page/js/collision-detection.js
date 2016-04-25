"use strict";
/*global $ */
var image;
var stone;
var stoneLeft;
var stoneRight;
var stoneAbove;
var stoneUnder;
var player;
var player_collision;
var playerLeft;
var playerRight;
var playerAbove;
var playerUnder;

$(document).keydown(function (e) {
	
    
	platform();

});

function platform() {
	var platform = $('#gamePlatform').position();
	var platformLeft = platform.left;
	var platformRight = platformLeft + $('#gamePlatform').width();
	var platformAbove = platform.top;
	var platformUnder = platformAbove + $('#gamePlatform').height();
    
    var stone = $('.stone').position();
    var stones = $('.stone');
    
	var stoneLeft = stone.left;
	var stoneRight = stoneLeft + $('.stone').width();
	var stoneAbove = stone.top;
	var stoneUnder = stoneAbove + $('.stone').height();
    
    var stone2Left = stone.left + ($('.stone').width() * 2);
	var stone2Right = stone2Left + $('.stone').width();
	var stone2Above = stone.top;
	var stone2Under = stone2Above + $('.stone').height();
    
    var stone3Left = stone.left + ($('.stone').width() * 4);
	var stone3Right = stone3Left + $('.stone').width();
	var stone3Above = stone.top;
	var stone3Under = stone3Above + $('.stone').height();
    
    var stone4Left = stone.left + ($('.stone').width() * 6);
	var stone4Right = stone4Left + $('.stone').width();
	var stone4Above = stone.top;
	var stone4Under = stone4Above + $('.stone').height();
    
    var stone5Left = stone.left + ($('.stone').width() * 8);
	var stone5Right = stone5Left + $('.stone').width();
	var stone5Above = stone.top;
	var stone5Under = stone5Above + $('.stone').height();
    
    var stone6Left = stone.left;
	var stone6Right = stone6Left + $('.stone').width();
	var stone6Above = stone.top + ($('.stone').height() *2 );
	var stone6Under = stone6Above + $('.stone').height();
    
    var stone7Left = stone.left + ($('.stone').width() *2);
	var stone7Right = stone7Left + $('.stone').width();
	var stone7Above = stone.top + ($('.stone').height() *2 );
	var stone7Under = stone7Above + $('.stone').height();
    
    var stone8Left = stone.left + ($('.stone').width() *4);
	var stone8Right = stone8Left + $('.stone').width();
	var stone8Above = stone.top + ($('.stone').height() *2 );
	var stone8Under = stone8Above + $('.stone').height();
    
    var stone9Left = stone.left + ($('.stone').width() *6);
	var stone9Right = stone9Left + $('.stone').width();
	var stone9Above = stone.top + ($('.stone').height() *2 );
	var stone9Under = stone9Above + $('.stone').height();
    
    var stone10Left = stone.left + ($('.stone').width() *8);
	var stone10Right = stone10Left + $('.stone').width();
	var stone10Above = stone.top + ($('.stone').height() *2 );
	var stone10Under = stone10Above + $('.stone').height();
    
    var stone11Left = stone.left;
	var stone11Right = stone11Left + $('.stone').width();
	var stone11Above = stone.top + ($('.stone').height() * 4 );
	var stone11Under = stone11Above + $('.stone').height();
    
    var stone12Left = stone.left + ($('.stone').width() *2);
	var stone12Right = stone12Left + $('.stone').width();
	var stone12Above = stone.top + ($('.stone').height() * 4 );
	var stone12Under = stone12Above + $('.stone').height();
    
    var stone13Left = stone.left + ($('.stone').width() *4);
	var stone13Right = stone13Left + $('.stone').width();
	var stone13Above = stone.top + ($('.stone').height() * 4 );
	var stone13Under = stone13Above + $('.stone').height();
    
    var stone14Left = stone.left + ($('.stone').width() *6);
	var stone14Right = stone14Left + $('.stone').width();
	var stone14Above = stone.top + ($('.stone').height() * 4 );
	var stone14Under = stone14Above + $('.stone').height();
    
    var stone15Left = stone.left + ($('.stone').width() *8);
	var stone15Right = stone15Left + $('.stone').width();
	var stone15Above = stone.top + ($('.stone').height() * 4 );
	var stone15Under = stone15Above + $('.stone').height();
    
    var stone16Left = stone.left;
	var stone16Right = stone16Left + $('.stone').width();
	var stone16Above = stone.top + ($('.stone').height() * 6  );
	var stone16Under = stone16Above + $('.stone').height();
    
    var stone17Left = stone.left + ($('.stone').width() *2);
	var stone17Right = stone17Left + $('.stone').width();
	var stone17Above = stone.top + ($('.stone').height() * 6 );
	var stone17Under = stone17Above + $('.stone').height();
    
    var stone18Left = stone.left + ($('.stone').width() *4);
	var stone18Right = stone18Left + $('.stone').width();
	var stone18Above = stone.top + ($('.stone').height() * 6 );
	var stone18Under = stone18Above + $('.stone').height();
    
    var stone19Left = stone.left + ($('.stone').width() *6);
	var stone19Right = stone19Left + $('.stone').width();
	var stone19Above = stone.top + ($('.stone').height() * 6 );
	var stone19Under = stone19Above + $('.stone').height();
    
    var stone20Left = stone.left + ($('.stone').width() *8);
	var stone20Right = stone20Left + $('.stone').width();
	var stone20Above = stone.top + ($('.stone').height() * 6 );
	var stone20Under = stone20Above + $('.stone').height();
    
    
    
    if ((playerRight > stoneLeft ) &&  (playerRight < stoneRight ) && (playerAbove > stoneAbove - 55) && (playerUnder < stoneUnder + 40)) moveRight2 = false;
    else if ((playerLeft < stoneRight ) &&  (playerLeft > stoneLeft ) && (playerAbove > stoneAbove - 55) && (playerUnder < stoneUnder + 40)) moveLeft2 = false;
    else if((playerAbove < stoneUnder) && (playerAbove > stoneAbove) && ( playerLeft > stoneLeft - 40) && (playerRight < stoneRight + 40)) moveUp2 = false;
	else if((playerUnder > stoneAbove) && (playerUnder < stoneUnder) && ( playerLeft > stoneLeft - 40) && (playerRight < stoneRight + 40)) moveDown2 = false;
    
	else if ((playerRight > stone2Left ) &&  (playerRight < stone2Right ) && (playerAbove > stone2Above - 55) && (playerUnder < stone2Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone2Right ) &&  (playerLeft > stone2Left ) && (playerAbove > stone2Above - 55) && (playerUnder < stone2Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone2Under) && (playerAbove > stone2Above) && ( playerLeft > stone2Left - 40) && (playerRight < stone2Right + 40)) moveUp2 = false;
	else if((playerUnder > stone2Above) && (playerUnder < stone2Under) && ( playerLeft > stone2Left - 40) && (playerRight < stone2Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone3Left ) &&  (playerRight < stone3Right ) && (playerAbove > stone3Above - 55) && (playerUnder < stone3Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone3Right ) &&  (playerLeft > stone3Left ) && (playerAbove > stone3Above - 55) && (playerUnder < stone3Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone3Under) && (playerAbove > stone3Above) && ( playerLeft > stone3Left - 40) && (playerRight < stone3Right + 40)) moveUp2 = false;
    else if((playerUnder > stone3Above) && (playerUnder < stone3Under) && ( playerLeft > stone3Left - 40) && (playerRight < stone3Right + 40)) moveDown2 = false;
    else if ((playerRight > stone4Left ) &&  (playerRight < stone4Right ) && (playerAbove > stone4Above - 55) && (playerUnder < stone4Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone4Right ) &&  (playerLeft > stone4Left ) && (playerAbove > stone4Above - 55) && (playerUnder < stone4Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone4Under) && (playerAbove > stone4Above) && ( playerLeft > stone4Left - 40) && (playerRight < stone4Right + 40)) moveUp2 = false;
    else if((playerUnder > stone4Above) && (playerUnder < stone4Under) && ( playerLeft > stone4Left - 40) && (playerRight < stone4Right + 40)) moveDown2 = false;
    else if ((playerRight > stone5Left ) &&  (playerRight < stone5Right ) && (playerAbove > stone5Above - 55) && (playerUnder < stone5Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone5Right ) &&  (playerLeft > stone5Left ) && (playerAbove > stone5Above - 55) && (playerUnder < stone5Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone5Under) && (playerAbove > stone5Above) && ( playerLeft > stone5Left - 40) && (playerRight < stone5Right + 40)) moveUp2 = false;
    else if((playerUnder > stone5Above) && (playerUnder < stone5Under) && ( playerLeft > stone5Left - 40) && (playerRight < stone5Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone6Left ) &&  (playerRight < stone6Right ) && (playerAbove > stone6Above - 55) && (playerUnder < stone6Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone6Right ) &&  (playerLeft > stone6Left ) && (playerAbove > stone6Above - 55) && (playerUnder < stone6Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone6Under) && (playerAbove > stone6Above) && ( playerLeft > stone6Left - 40) && (playerRight < stone6Right + 40)) moveUp2 = false;
    else if((playerUnder > stone6Above) && (playerUnder < stone6Under) && ( playerLeft > stone6Left - 40) && (playerRight < stone6Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone7Left ) &&  (playerRight < stone7Right ) && (playerAbove > stone7Above - 55) && (playerUnder < stone7Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone7Right ) &&  (playerLeft > stone7Left ) && (playerAbove > stone7Above - 55) && (playerUnder < stone7Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone7Under) && (playerAbove > stone7Above) && ( playerLeft > stone7Left - 40) && (playerRight < stone7Right + 40)) moveUp2 = false;
    else if((playerUnder > stone7Above) && (playerUnder < stone7Under) && ( playerLeft > stone7Left - 40) && (playerRight < stone7Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone8Left ) &&  (playerRight < stone8Right ) && (playerAbove > stone8Above - 55) && (playerUnder < stone8Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone8Right ) &&  (playerLeft > stone8Left ) && (playerAbove > stone8Above - 55) && (playerUnder < stone8Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone8Under) && (playerAbove > stone8Above) && ( playerLeft > stone8Left - 40) && (playerRight < stone8Right + 40)) moveUp2 = false;
    else if((playerUnder > stone8Above) && (playerUnder < stone8Under) && ( playerLeft > stone8Left - 40) && (playerRight < stone8Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone9Left ) &&  (playerRight < stone9Right ) && (playerAbove > stone9Above - 55) && (playerUnder < stone9Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone9Right ) &&  (playerLeft > stone9Left ) && (playerAbove > stone9Above - 55) && (playerUnder < stone9Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone9Under) && (playerAbove > stone9Above) && ( playerLeft > stone9Left - 40) && (playerRight < stone9Right + 40)) moveUp2 = false;
    else if((playerUnder > stone9Above) && (playerUnder < stone9Under) && ( playerLeft > stone9Left - 40) && (playerRight < stone9Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone10Left ) &&  (playerRight < stone10Right ) && (playerAbove > stone10Above - 55) && (playerUnder < stone10Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone10Right ) &&  (playerLeft > stone10Left ) && (playerAbove > stone10Above - 55) && (playerUnder < stone10Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone10Under) && (playerAbove > stone10Above) && ( playerLeft > stone10Left - 40) && (playerRight < stone10Right + 40)) moveUp2 = false;
    else if((playerUnder > stone10Above) && (playerUnder < stone10Under) && ( playerLeft > stone10Left - 40) && (playerRight < stone10Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone11Left ) &&  (playerRight < stone11Right ) && (playerAbove > stone11Above - 55) && (playerUnder < stone11Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone11Right ) &&  (playerLeft > stone11Left ) && (playerAbove > stone11Above - 55) && (playerUnder < stone11Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone11Under) && (playerAbove > stone11Above) && ( playerLeft > stone11Left - 40) && (playerRight < stone11Right + 40)) moveUp2 = false;
    else if((playerUnder > stone11Above) && (playerUnder < stone11Under) && ( playerLeft > stone11Left - 40) && (playerRight < stone11Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone12Left ) &&  (playerRight < stone12Right ) && (playerAbove > stone12Above - 55) && (playerUnder < stone12Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone12Right ) &&  (playerLeft > stone12Left ) && (playerAbove > stone12Above - 55) && (playerUnder < stone12Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone12Under) && (playerAbove > stone12Above) && ( playerLeft > stone12Left - 40) && (playerRight < stone12Right + 40)) moveUp2 = false;
    else if((playerUnder > stone12Above) && (playerUnder < stone12Under) && ( playerLeft > stone12Left - 40) && (playerRight < stone12Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone13Left ) &&  (playerRight < stone13Right ) && (playerAbove > stone13Above - 55) && (playerUnder < stone13Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone13Right ) &&  (playerLeft > stone13Left ) && (playerAbove > stone13Above - 55) && (playerUnder < stone13Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone13Under) && (playerAbove > stone13Above) && ( playerLeft > stone13Left - 40) && (playerRight < stone13Right + 40)) moveUp2 = false;
    else if((playerUnder > stone13Above) && (playerUnder < stone13Under) && ( playerLeft > stone13Left - 40) && (playerRight < stone13Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone14Left ) &&  (playerRight < stone14Right ) && (playerAbove > stone14Above - 55) && (playerUnder < stone14Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone14Right ) &&  (playerLeft > stone14Left ) && (playerAbove > stone14Above - 55) && (playerUnder < stone14Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone14Under) && (playerAbove > stone14Above) && ( playerLeft > stone14Left - 40) && (playerRight < stone14Right + 40)) moveUp2 = false;
    else if((playerUnder > stone14Above) && (playerUnder < stone14Under) && ( playerLeft > stone14Left - 40) && (playerRight < stone14Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone15Left ) &&  (playerRight < stone15Right ) && (playerAbove > stone15Above - 55) && (playerUnder < stone15Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone15Right ) &&  (playerLeft > stone15Left ) && (playerAbove > stone15Above - 55) && (playerUnder < stone15Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone15Under) && (playerAbove > stone15Above) && ( playerLeft > stone15Left - 40) && (playerRight < stone15Right + 40)) moveUp2 = false;
    else if((playerUnder > stone15Above) && (playerUnder < stone15Under) && ( playerLeft > stone15Left - 40) && (playerRight < stone15Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone16Left ) &&  (playerRight < stone16Right ) && (playerAbove > stone16Above - 55) && (playerUnder < stone16Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone16Right ) &&  (playerLeft > stone16Left ) && (playerAbove > stone16Above - 55) && (playerUnder < stone16Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone16Under) && (playerAbove > stone16Above) && ( playerLeft > stone16Left - 40) && (playerRight < stone16Right + 40)) moveUp2 = false;
    else if((playerUnder > stone16Above) && (playerUnder < stone16Under) && ( playerLeft > stone16Left - 40) && (playerRight < stone16Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone17Left ) &&  (playerRight < stone17Right ) && (playerAbove > stone17Above - 55) && (playerUnder < stone17Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone17Right ) &&  (playerLeft > stone17Left ) && (playerAbove > stone17Above - 55) && (playerUnder < stone17Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone17Under) && (playerAbove > stone17Above) && ( playerLeft > stone17Left - 40) && (playerRight < stone17Right + 40)) moveUp2 = false;
    else if((playerUnder > stone17Above) && (playerUnder < stone17Under) && ( playerLeft > stone17Left - 40) && (playerRight < stone17Right + 40)) moveDown2 = false;
    
    else if ((playerRight > stone18Left ) &&  (playerRight < stone18Right ) && (playerAbove > stone18Above - 55) && (playerUnder < stone18Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone18Right ) &&  (playerLeft > stone18Left ) && (playerAbove > stone18Above - 55) && (playerUnder < stone18Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone18Under) && (playerAbove > stone18Above) && ( playerLeft > stone18Left - 40) && (playerRight < stone18Right + 40)) moveUp2 = false;
    else if((playerUnder > stone18Above) && (playerUnder < stone18Under) && ( playerLeft > stone18Left - 40) && (playerRight < stone18Right + 40)) moveDown2 = false;
    
    
    else if ((playerRight > stone19Left ) &&  (playerRight < stone19Right ) && (playerAbove > stone19Above - 55) && (playerUnder < stone19Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone19Right ) &&  (playerLeft > stone19Left ) && (playerAbove > stone19Above - 55) && (playerUnder < stone19Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone19Under) && (playerAbove > stone19Above) && ( playerLeft > stone19Left - 40) && (playerRight < stone19Right + 40)) moveUp2 = false;
    else if((playerUnder > stone19Above) && (playerUnder < stone19Under) && ( playerLeft > stone19Left - 40) && (playerRight < stone19Right + 40)) moveDown2 = false;
    
    
    else if ((playerRight > stone20Left ) &&  (playerRight < stone20Right ) && (playerAbove > stone20Above - 55) && (playerUnder < stone20Under + 40)) moveRight2 = false;
	else if ((playerLeft < stone20Right ) &&  (playerLeft > stone20Left ) && (playerAbove > stone20Above - 55) && (playerUnder < stone20Under + 40)) moveLeft2 = false;
	else if((playerAbove < stone20Under) && (playerAbove > stone20Above) && ( playerLeft > stone20Left - 40) && (playerRight < stone20Right + 40)) moveUp2 = false;
    else if((playerUnder > stone20Above) && (playerUnder < stone20Under) && ( playerLeft > stone20Left - 40) && (playerRight < stone20Right + 40)) moveDown2 = false;
    
    
    
    else {moveDown2 = true, moveUp2 = true, moveLeft2 = true, moveRight2 = true};
	
    
    
 
    if (playerLeft  < platformLeft) moveLeft = false;
	else moveLeft = true;

	if(playerRight > platformRight) moveRight = false;
	else moveRight = true;

	if(playerAbove - 8  < platformAbove) moveUp = false;
	else moveUp = true;

	if(playerUnder - 10> platformUnder) moveDown = false;
	else moveDown = true;
}
$(document).keydown(function (e) {

	image = $("#bomber").attr("src");

	var player = $("#bomber");
	var playerPosition = $("#bomber").position();

	player_collision = { x_left: playerPosition.left, y_top: playerPosition.top, breedte: player.width(), lengte: player.height() };

	playerLeft = player_collision.x_left;
	playerRight = player_collision.x_left + player_collision.breedte;
	playerAbove = player_collision.y_top;
	playerUnder = player_collision.y_top + player_collision.lengte;

	platform();
});