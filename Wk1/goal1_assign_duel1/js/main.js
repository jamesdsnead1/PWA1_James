/**
 * Duel Fight Game - FINISHED
 * Date: 12/01/13

 Assignment 1
 Part 1/3 of series
*/

(function(){

    console.log("FIGHT!!!");

    //name
    var player1Name = "Spiderman";
    var player2Name = "Batman";

    //damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var player1Health = 100;
    var player2Health = 100;

    //initiate round
    var round=0;

    function fight(){
        alert(player1Name+":"+player1Health+"  *START*  "+player2Name+":"+player2Health);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            player1Health-=f1;
            player2Health-=f2;

            console.log(player1Name+": "+player1Health + " " + player2Name+":"+player2Health);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(player1Name+":"+player1Health+"  *ROUND "+round+" OVER"+"*  "+player2Name+":"+player2Health);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (player1Health<1 && player2Health<1)
        {
            result = "You Both Die";
        } else if(player1Health<1){
            result =player2Name+" WINS!"
        } else if (player2Health<1)
        {
            result = player1Name+" WINS!"
        };
       return result;
    };

    fight();

})();