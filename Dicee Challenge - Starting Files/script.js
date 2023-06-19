var randomNum1 = Math.floor(Math.random() * 6) +1;

var randmDice1 = "dice" + randomNum1 + ".png";

var randomSrc = "images/" + randmDice1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSrc);

var randomNum2 = Math.floor(Math.random() * 6) +1;

var randmDice2 = "dice" + randomNum2 + ".png";

var randomSrc2 = "images/" + randmDice2;

document.querySelectorAll("img")[1].setAttribute("src", randomSrc2);

if( randomNum1>randomNum2 )
{
    document.querySelector("h1").innerHTML= "Player 1 wins🏆";
}
else if( randomNum1<randomNum2 )
{
    document.querySelector("h1").innerHTML= "Player 2 wins🏆";
}
else
{
    document.querySelector("h1").innerHTML= "Draw🤝";
}