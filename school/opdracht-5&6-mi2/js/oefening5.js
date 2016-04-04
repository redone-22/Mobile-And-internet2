"use strict";
/*global $ */
$(document).ready(function () {
    $("li").click(function () {
        $(this).css({"font-weight": "bold"});
    });
    $("button").click(function () {
        var plaats = $("input");
        $("ul").append("<li>" + plaats.val() + "</li>");
        $("li").click(function () { $(this).css({"font-weight": "bold"});
                });
    });
});

/*
var fontWeight = $(this).css('font-weight');
        if ($(this).css('font-weight') === 'normal') {
            $(this).css({"font-weight": "bold"});
        } else if ($(this).css('font-weight') === 'bold') {$(this).css({"font-weight": "normal"}); } });
*/

/*
var fontWeight, font;
    $("li").click(function () { fontWeight = $(this).css("font-weight"); if (fontWeight  === 'normal' || fontWeight  === '400') {font = "bold"; $(this).css({"font-weight": font.val()}); } else if (fontWeight  === 'bold' || fontWeight  === '700') {font = "normal"; $(this).css({"font-weight": font.val()}); }
*/