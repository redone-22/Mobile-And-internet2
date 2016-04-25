"use strict";
/*global $ */
    var monsterMoveUp = true;
    var monsterMoveLeft = true;
    var monsterMoveRight = true;
    var monsterMoveDown = true;

var KanBewegen = new Array();
    var functie_Array_teller = 0;

$(document).ready(function() {
    
});

function monster-intel() {
    
    scherm = $('#gamePlatform').position();
	schermLinks = scherm.left;
	schermRechts = schermLinks + $('#gamePlatform').width();
	schermTop = scherm.top;
	schermOnder = schermTop + $('#gamePlatform').height();
   
        for( i = 0; i < Aantalmonsters.length ; i++){
            if(Aantalmonsters[i]==true){    
            var richting = Math.floor(Math.random() * 4) + 1; 
            var aantalstappen = Math.floor(Math.random() * 3) + 1;
                    
               
            switch(richting){
            
            case 1:
                    
                    for (j = 0 ; j < aantalstappen ; j++){
                        
                        if ((($("#monster" + i).position().left) - 20 * aantalstappen) < 0 ){
                        }
                            else{
                                $("#monster" + i).animate({left: '-=20px'}, 500);
                                
                            }    
                    }
            break;
                    
            case 2:
                    for (j = 0 ; j < aantalstappen ; j++){
                        
                        if((($("#monster" + i).position().top) - 20 * aantalstappen) < schermTop){
                        }
                        else{
                            $("#monster" + i).animate({top: '-=20px'}, 500);
                        }
                    }
            break;
            
            case 3:
                    for (j = 0 ; j < aantalstappen ; j++){
                        
                        if((($("#monster" + i).position().left) + 20 * aantalstappen) > schermRechts){
                        }
                        else{
                            $("#monster" + i).animate({left: '+=20px'}, 500);
                        }
                    }
            break;
            case 4:
                    for (j = 0 ; j < aantalstappen ; j++){

                        if((($("#monster" + i).position().top + $("#Octorok" + i).height() + 7) + 20 * aantalstappen)> schermOnder){ 
                        }else{
                            $("#monster" + i).animate({top: '+=20px'}, 500);
                        }
                    }
            break; 
            } 
        
            } 

        }
    setTimeout(function(){
           AI();
    }, 1500);
    
    
    
};