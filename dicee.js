'use strict'

var randomNum1 = getRandomInt(1,7)
console.log(randomNum1);
var randomImgSrc = `images/dice${randomNum1}.png`
var elDice1 = document.querySelectorAll('img')[0];
elDice1.setAttribute('src', randomImgSrc);

var randomNum2 = getRandomInt(1,7)
console.log(randomNum2);
var randomImgSrc2 = `images/dice${randomNum2}.png`
var elDice2 = document.querySelectorAll('img')[1];
elDice2.setAttribute('src', randomImgSrc2)



declarWinner()
function declarWinner(){
    if (randomNum1>randomNum2){
        document.querySelector('h1').innerHTML = 'player1 won'
    }else if(randomNum1<randomNum2) {
        document.querySelector('h1').innerHTML = 'player2 won'
    }else{
        document.querySelector('h1').innerHTML = 'its a tie'
    }
}
