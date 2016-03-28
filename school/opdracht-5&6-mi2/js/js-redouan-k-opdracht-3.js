"use strict";
/*global $ */
$(document).ready(function () { $("body").fadeIn(3000);
    $("#imga").click(function () { $(".imgOut").fadeOut(3000); });
    $("#imgChange").click(function () { $("#imga").attr("src", "http://img.mobypicture.com/ac9221b42e4852370dde2768686b999e_large.jpg"); });
                              });