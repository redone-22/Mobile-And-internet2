"use strict";
/*global $ */


function collision( bomber, yto , xto )
{
    var found=false;
   var rect1 = {x: bomber.position().left + xto, y: bomber.position().top + yto, width: bomber.width(), height: bomber.height()}
  $(".stone").each(function(i, element ){

        var rect2 = {x: $(element).position().left, y: $(element).position().top, width: $(element).width(), height: $(element).height()}
        if(!found)
         found = !(
        ((rect1.y + rect1.height) < (rect2.y)) ||
        (rect1.y > (rect2.y + rect2.height)) ||
        ((rect1.x + rect1.width) <rect2.x) ||
        (rect1.x > (rect2.x + rect2.width))
    );
   });
   if (NotInWorld(bomber, yto , xto))
   {
        return true;
   }
   else
   {
        return found;
   }
   
}

function collision_monster( bomber )
{
    var found=false;
   var rect1 = {x: bomber.position().left , y: bomber.position().top , width: bomber.width(), height: bomber.height()}
  $(".monsters").each(function(i, element ){

        var rect2 = {x: $(element).position().left, y: $(element).position().top, width: $(element).width(), height: $(element).height()}
        if(!found)
         found = !(
        ((rect1.y + rect1.height) < (rect2.y)) ||
        (rect1.y > (rect2.y + rect2.height)) ||
        ((rect1.x + rect1.width) <rect2.x) ||
        (rect1.x > (rect2.x + rect2.width))
    );
   
   return found;
   
   
});
}

function collision_fire( bomber , fire )
{
   
    try {
         var found=false;
   var rect1 = {x: bomber.position().left , y: bomber.position().top , width: bomber.width(), height: bomber.height()}
  $(fire).each(function(i, element ){

        var rect2 = {x: $(element).position().left, y: $(element).position().top, width: $(element).width(), height: $(element).height()}
        if(!found)
         found = !(
        ((rect1.y + rect1.height) < (rect2.y)) ||
        (rect1.y > (rect2.y + rect2.height)) ||
        ((rect1.x + rect1.width) <rect2.x) ||
        (rect1.x > (rect2.x + rect2.width))
    );
        if (found)
        {
            bomber.css({"left" : -100000});
        } 
          });
    } catch(e) {
       ;
    }
   

   
   

}
function NotInWorld( bomber, yto , xto)
{
    var world = $("#gamePlatform");
    if (bomber.position().top + yto > world.height())
    {
            return true;
    }
    if (bomber.position().left + xto < 0)
    {
            return true;
    }
     if (bomber.position().top + yto < 0)
    {
            return true;
    }
     if (bomber.position().left + xto + 4 > world.width())
    {
            return true;
    }

    return false;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function  moveM()
{
  return setInterval(function(){
    for (var i = 0 ; i < 3; ++i ) {
 var rdn = getRandomInt(0, 4);
 
   var bomber = $("#monster" + i);
    switch  (rdn)
    {
            case 0 :
            if (!collision( bomber,  speedh , 0 ))
            {
                
                 bomber.animate({
                    "top": "+="+speedh+"px"
                }, 0);
            }
            break;
            case 1 :
             if (!collision( bomber, -1 *speedh , 0 ))
            {
                
                 bomber.animate({
                    "top": "-="+speedh+"px"
                }, 0);
            }
            break;
            case 2 :
             if (!collision( bomber, 0 , speedw ))
            {
                
                     bomber.animate({
                    "left": "+="+speedw+"px"
                }, 0);
            }
            break;
            case 3 :
             if (!collision( bomber, 0 ,  -1 * speedw ))
            {
                     bomber.animate({
                    "left": "-="+speedw+"px"
                }, 0);
            }
            break;
    }
     collision_monster( $("#bomber") );

}
} , 300);
}
   

