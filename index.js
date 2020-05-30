var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6)+1;


var diceroll = "dice" + randomNumber1+".png";

var randomdiceimg = "images/" + diceroll ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute ("src", randomdiceimg );

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6)+1;

var diceroll2 = "dice" + randomNumber2+".png";

var randomdiceimg2 = "images/" + diceroll2 ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute ("src", randomdiceimg2 );

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = " 🏁Player 1 Wins!";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 Wins!🏁";
}
else {
  document.querySelector("h1").innerHTML = " 🏁 Draw 🏁 ";
}
