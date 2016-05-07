"use strict";
/*global $ */
var space = 32;
var playerPosition, playerPositions;
var numberBom = 5;
var bomInGame = 1;
var bomexplosion = 1;
var bomhist = 1;
var soufle = 3;
var timer = false;

$(document).keydown(function(b) {
    if ((b.which) === space) {
        if (bomInGame <= numberBom) {
            playerPosition = $('#bomber').position();
            playerPositions = {
                top: playerPosition.top,
                left: playerPosition.left
            };
           var prefix =Math.floor(Math.random()* 1000000);
            $("#gamePlatform").append("<img src='img/Smoothie_Smash_Bomb.gif' alt='bomb' id='bomb" + prefix + "'>");
            $("#bomb" + prefix).css({
                position: 'absolute',
                top: playerPositions.top ,
                left: playerPositions.left ,
                height: '40px',
                width: '50px'
            });
            ++bomInGame;
          
            var Non = false;
            setTimeout(function() {
                var bom = $("#bomb" + prefix).position();
                console.log(prefix);
                $("#bomb" + prefix).attr('src', 'img/bom.png');
                var explosion  =Math.floor(Math.random()* 1000000);
              
                for (var i = 1; i <= soufle; ++i) {
                    if (!Non && !collision($("#bomb" + prefix) , 0 , speedw * i))
                    {
                       

                        var intern  =Math.floor(Math.random()* 1000000);
                         $("#gamePlatform").append("<img src='img/bom.png' alt='bomb' class='expl" + explosion + "' id='expl-" + intern + "'>");
                         $("#expl-" + intern).css({
                                position: 'absolute',
                                top: bom.top ,
                                left: bom.left  + speedw * i,
                                height: '40px',
                                width: '50px'
                            });
                       collision_fire( $("#bomber") , ".expl" +explosion)
for (var i = 0   ; i < 3; ++i) {
      collision_fire( $("#monster" +i) , ".expl" +explosion);
}
                         }
                         else
                         {
                            Non = true;
                         }

                    }

                
                 Non = false;
                for (var i = 1; i <= soufle; ++i) {
                    
                    if (!Non && !collision($("#bomb" + prefix) , 0 , speedw * -i) )
                    {

                    
                        var intern  =Math.floor(Math.random()* 1000000);
                         $("#gamePlatform").append("<img src='img/bom.png' alt='bomb' class='expl" + explosion + "' id='expl-" + intern + "'>");
                         $("#expl-" + intern).css({
                                position: 'absolute',
                                top: bom.top ,
                                left: bom.left  + speedw * -i,
                                height: '40px',
                                width: '50px'
                            });
                       collision_fire( $("#bomber") , ".expl" +explosion)
for (var i = 0   ; i < 3; ++i) {
      collision_fire( $("#monster" +i) , ".expl" +explosion);
}
                      
                    }
                     else
                         {
                            Non = true;
                         }
                    
                }
                 Non = false;
                for (var i = 1; i <= soufle; ++i) {
                      if (!Non && !collision($("#bomb" + prefix) ,  speedh * i,0) )
                    {
                        
                            var intern  =Math.floor(Math.random()* 1000000);
                         $("#gamePlatform").append("<img src='img/bom.png' alt='bomb' class='expl" + explosion + "' id='expl-" + intern + "'>");
                         $("#expl-" + intern).css({
                                position: 'absolute',
                                top: bom.top   + speedh * i,
                                left: bom.left ,
                                height: '40px',
                                width: '50px'
                            });
                      collision_fire( $("#bomber") , ".expl" +explosion)
for (var i = 0   ; i < 3; ++i) {
      collision_fire( $("#monster" +i) , ".expl" +explosion);
}
                        
                        
                    }
                     else
                         {
                            Non = true;
                         }
                }
                Non = false;
                 
                for (var i = 1; i <= soufle; ++i) {
                   if (!Non &&  !collision($("#bomb" + prefix) ,  speedh * -i ,0))
                    {
                        
                        var intern  =Math.floor(Math.random()* 1000000);
                         $("#gamePlatform").append("<img src='img/bom.png' alt='bomb' class='expl" + explosion + "' id='expl-" + intern + "'>");
                         $("#expl-" + intern).css({
                                position: 'absolute',
                                top: bom.top   + speedh * -i,
                                left: bom.left ,
                                height: '40px',
                                width: '50px'
                            });
                      collision_fire( $("#bomber") , ".expl" +explosion)
for (var i = 0   ; i < 3; ++i) {
      collision_fire( $("#monster" +i) , ".expl" +explosion);
}
                       
                    }
                    else
                    {
                        Non = true;
                    }
                  
                }

                
                --bomInGame;
                setTimeout(function() {
                    collision_fire( $("#bomber") , ".expl" +explosion)
for (var i = 0   ; i < 3; ++i) {
      collision_fire( $("#monster" +i) , ".expl" +explosion);
}
                    $("#bomb" + prefix).remove();
                    $(".expl" + explosion).remove();
                }, 500);
                
            }, 5000);

        }
        /*
        if (bomInGame === 2 && bomInGame < numberBom) {numberBom = numberBom - 1; playerPosition = $('#bomber').position(); playerPositions = {top: playerPosition.top, left: playerPosition.left}; $("#gamePlatform").append("<img src='img/Smoothie_Smash_Bomb.gif' alt='bomb' id='bomb" + bomInGame + "'>");
                            $("#bomb" + bomInGame).css({position: 'absolute', top: playerPositions.top, left: playerPositions.left, height: '50px', width: '50px'});  setTimeout(function b2() { $("#bomb" + bomexplosion).attr('src', 'img/bom.png'); bomexplosion = bomexplosion + 1; }, 1000); bomInGame = bomInGame + 1;
                           }*/
    }
    /*if (timer === true) { setTimeout(function () { $("#bomb" + bomInGame).attr('src', 'img/bom.png'); }, 1000); timer = false; }*/
});

/*$("#bomb" + bomInGame).css({height: '100px', width: '100px'}); */