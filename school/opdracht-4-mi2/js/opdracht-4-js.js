"use strict";
/*global $ */
$(document).ready(function () {
    var plaats = $("li").last().detach();
    var aantal = $("li").length;
    $($("li").first()).before("Aantal plaatsen: " + aantal);
    $($("li").first()).before(plaats);
    var lijntje = $("li:nth-child(3n)").text();
    $($("li").last()).after("Weer 3: " + lijntje);
    
});