/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

(function(){

    console.log("FIGHT!!!");
/*
    //name
    var player1Name = "Spiderman";
    var player2Name = "Batman";

    //damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var player1Health = 100;
    var player2Health = 100;
*/
    //initiate round
    
	var player1 = ["Spiderman", 20, 100];
	var player2 = ["Batman", 20, 100];
	
	var round=0;

    function fight(){
        alert(player1[0]+":"+player1[2]+"  *START*  "+player2[0]+":"+player2[2]);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1[1] * .5;
            var minDamage2 = player2[1] * .5;
            var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);

            //inflict damage
            player1[2]-=f1;
            player2[2]-=f2;

            console.log(player1[0]+": "+player1[2] + " " + player2[0]+":"+player2[2]);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(player1[0]+":"+player1[2]+"  *ROUND "+round+" OVER"+"*  "+player2[0]+":"+player2[2]);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (player1[2]<1 && player2[2]<1)
        {
            result = "You Both Die";
        } else if(player1[2]<1){
            result =player2[0]+" WINS!"
        } else if (player2[2]<1)
        {
            result = player1[0]+" WINS!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();