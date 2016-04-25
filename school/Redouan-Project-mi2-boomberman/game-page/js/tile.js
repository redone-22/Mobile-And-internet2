"use strict";
/*global $ */
function drawStone() {
var i, j, resultaat = ""; 

    for (i = 0; i <= 10; i = i + 1)
        {
            resultaat = resultaat + "<div class='transparent'></div>";
        }
    for (i = 0; i <= 6; i = i + 1) { 
        for (j = 0; j <= 10; j = j + 1) 
        { 
            if (j%2 === 1 && i%2 === 0)
            {resultaat = resultaat + "<img src='img/tileStone.png' alt='tileStone' class='stone'>"; }
            else{resultaat = resultaat + "<div class='transparent'></div>"}
        } 
    } 
     for (i = 0; i <= 10; i = i + 1)
        {
            resultaat = resultaat + "<div class='transparent'></div>";
        }
/*    resultaat = resultaat + "<img src='img/tileStone.png' alt='tileStone' class='stone'>";*/
    document.write(resultaat);
    
}
