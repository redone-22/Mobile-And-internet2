"use strict";
/*global $ */
var bomberlife = 3;

$(document).ready(function (e) {//De gegevens al klaarzetten als het spel start
    hearth();
});



function hearth() {// Wordt aangeroepen als Link leven verliest

    var teller = $(".hartimg").length;
    
    /*for(i = 0; i < teller; i++)
	{
		$('#hart' + i).remove()
	}*/
    var i;
    for (i = 0; i < bomberlife; i = i + 1) {
		$('#harten').prepend("<img class='hartimg' id='hart" + i + "' src='img/hearth.png' />"); }

}
